FROM node:8-alpine

ENV NODE_ENV "production"
ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --only=production --no-color

# Bundle app source
COPY . /usr/src/app

#Expose Port
EXPOSE 3000

USER node

#Start
CMD [ "npm", "start" ]
