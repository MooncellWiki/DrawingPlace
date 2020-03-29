FROM node:lts
WORKDIR /home/node/app
COPY . /home/node/app/
EXPOSE 5200
RUN npm ci
CMD npm start