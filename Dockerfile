# 로컬테스트용
# FROM staging:latest
FROM node:14.16.1

RUN apt-get update && apt-get install -y locales fonts-nanum fonts-nanum-coding fonts-nanum-extra fonts-takao-mincho

# app 환경 설정

# 배포
COPY . /app
WORKDIR /app

# npm i
RUN npm i --production

# RUN npm install typescript
RUN npm i typescript -g

RUN npm i -g tsc-alias

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

RUN unzip awscliv2.zip

RUN ./aws/install

RUN aws configure set aws_access_key_id values
RUN aws configure set aws_secret_access_key values
RUN aws configure set default.region values

# RUN npm run build
RUN npm run build

# app 구동 설정
EXPOSE 3000
ENV PORT=3000

ENV NODE_ENV=production

CMD node ./dist/server.js
