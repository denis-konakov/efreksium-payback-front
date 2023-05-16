FROM node:latest


ENV REACT_APP_API_URL="http://localhost/api/v1"
ENV REACT_APP_ATTACHMENTS_URL="http://localhost/attachments"
ENV REACT_APP_URL="http://localhost:3000"

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm i --legacy-peer-deps
COPY . .
RUN npm run build 
RUN npm install -g serve
CMD ["serve", "-s", "/app/build"]