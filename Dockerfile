FROM node:16.15.1

RUN apt-get install tzdata && \
    cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

WORKDIR /home/node/app
# ENV PATH /app/node_modules/.bin:$PATH
# ENV CHOKIDAR_USEPOOLING=true

RUN npm install -g npm@8.13.2 --silent && \
    npm install react-scripts@5.0.1 -g

COPY package.json ./
RUN npm install 

COPY . .

EXPOSE 5000
CMD ["npm", "start"]
