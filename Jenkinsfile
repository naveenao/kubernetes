pipeline {
    agent any
    environment {
        DOCKER_CREDENTIALS = credentials('d9bc854b-fc48-4206-988a-c346b8718cca')
        GIT_CREDENTIALS = credentials('af3a1281-d6b4-42a9-8f2b-3ee5e8b59345')
    }
    stages {
        stage ('git pull') {
            steps {
                sh'${GIT_CREDENTIALS}'
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/naveenao/kubernetes']]])
            }
        }
        stage ('build docker image') {
            steps{
                script{
                    sh 'docker build -t naveenao/customdockerimage .'
                }
            }
        }
        stage ('push image to docker hub') {
             steps{
                script{
                    sh 'docker login ${DOCKER_CREDENTIALS}'
                    sh 'docker push naveenao/customdockerimage'
                }
            }
        }
        stage ('deploy to kubernetes') {
            steps{
                script{
                    kubernetesDeploy (configs: 'samp-deployment.yaml')
                }
            }
        }
    }
}