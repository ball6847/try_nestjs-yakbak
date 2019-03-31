FROM node:10.9-alpine
LABEL maintainer="ball6847@gmail.com"

WORKDIR /src
COPY . /src

RUN npm install && \
    ./node_modules/.bin/lerna bootstrap && \
    ./node_modules/.bin/lerna run --stream --scope @ball6847/yakbak-nestjs build && \
    ./node_modules/.bin/lerna run --stream --scope @ball6847/yakbak-nestjs-app build

EXPOSE 3000 3001
VOLUME [ "/src/packages/yakbak-nestjs-app/tapes" ]
CMD [ "./node_modules/.bin/lerna", "exec", "--stream", "--scope", "@ball6847/yakbak-nestjs-app", "node dist/main.js" ]
