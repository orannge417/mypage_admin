FROM node:16.13.1


RUN apt-get update

RUN mkdir /usr/src/next
WORKDIR /usr/src/next

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
