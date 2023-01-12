FROM node:19-alpine3.16

RUN yarn install


WORKDIR /home/app/

COPY . .


