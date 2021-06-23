FROM node:alpine3.12 AS  build

WORKDIR /var/build

COPY ./ /var/build/

RUN npm install
RUN npm run build

FROM node:alpine3.12

WORKDIR /adsb

RUN npm install -g serve

COPY --from=build /var/build/build .

EXPOSE 80

ENTRYPOINT ["/usr/local/bin/serve", "-l", "tcp://0.0.0.0:80", "-s", "-n", "/adsb"]
