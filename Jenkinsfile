pipeline {
    agent any
    environment {
        dockerimagename = "naveenao/customdockerimage"
        dockerImage = ""
    }
    stages {
        stage ('git pull') {
            steps {
                git credentialsId: 'af3a1281-d6b4-42a9-8f2b-3ee5e8b59345', url: 'https://github.com/naveenao/kubernetes'            }
        }
        stage('Build docker image'){
            steps{
                script{
                    dockerImage = docker.build dockerimagename
                }
            }
        }
        stage('Push image') {
            steps {
                script {
                    withDockerRegistry([ credentialsId: "d9bc854b-fc48-4206-988a-c346b8718cca"]) {
                        dockerImage.push('latest')
                    }
                }
            }
        }
        stage('deploy on kubernetes') {
            steps {
                script {
                    kubernetesDeploy( configs: 'samp-deployment.yaml', kubeconfigId: 'kubernetes')
                }
            }
        }
    }
}