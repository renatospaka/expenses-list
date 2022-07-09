FROM node:16.15.1-alpine3.16

RUN apk add --no-cache bash && \
    apk add tzdata && \
    cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

WORKDIR /home/node/app

# RUN npm install -location=global npm@8.13.2
RUN npm install -g npm@8.13.2 --silent && \
    npm install react-scripts@5.0.1 -g

USER node:node
COPY package.json ./
# RUN npm install 

COPY . .

# CMD ["npm", "start"]
CMD ["tail", "-f", "/dev/null"]
