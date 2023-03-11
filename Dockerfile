FROM node:14

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

# ARG DEFAULT_PORT=80

# ENV PORT $DEFAULT_PORT

EXPOSE 80
# EXPOSE $PORT

# VOLUME [ "/app/feedback" ] 익명 볼륨, 컨테이너가 사라지면 같이 사라짐

CMD [ "npm", "run", "dev"]

# CMD ["node","server.js"] ->nodemon으로 바꿈

# CMD ["npm","start"]