# Dockerfile for ct-did-driver

FROM node:18

# build ct-did-driver
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

# done

EXPOSE 8080

CMD [ "node", "index.js" ]