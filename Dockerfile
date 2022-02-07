FROM node:16
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

RUN git clone git@github.com:HWR-DenisKnecht/Ebay.git ./
EXPOSE 8080
CMD ["node", "index.js"]