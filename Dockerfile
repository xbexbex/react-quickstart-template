FROM node:12-alpine

ADD . /build-files

RUN cd /build-files && \
    npm install && \
    npm install -g serve && \
    npm run-script build && \
    mkdir /app && \
    mv dist /app && \
    chown -R node /app && \
    chmod 771 -R /app && \
    rm -r /build-files

USER node

EXPOSE 5000

WORKDIR /app

CMD serve dist
