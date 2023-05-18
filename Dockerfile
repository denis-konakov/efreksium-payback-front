FROM node:latest


ENV REACT_APP_API_URL="http://localhost/api/v1"
ENV REACT_APP_ATTACHMENTS_URL="http://localhost/attachments"
ENV REACT_APP_URL="http://localhost:3000"
RUN npm install -g serve
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm i --legacy-peer-deps

COPY entrypoint.sh .

RUN apt update && apt install dos2unix
RUN dos2unix entrypoint.sh

COPY . .

ENTRYPOINT [ "bash", "entrypoint.sh" ]