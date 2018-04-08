FROM node:8

WORKDIR /src
ADD src/gmailsignin-f6c00b9c7788.json /src/
ADD src/package.json /src/

ENV GOOGLE_APPLICATION_CREDENTIALS  "$GOOGLE_APPLICATION_CREDENTIALS:/src/gmailsignin-f6c00b9c7788.json"


#install node modules
RUN npm install

# Add app source files
ADD src /src

CMD ["node", "server.js"]
