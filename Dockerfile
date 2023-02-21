FROM node:alpine
WORKDIR /usr/app
COPY ./ ./
EXPOSE 8082
RUN npm install
CMD ["npm","start"]