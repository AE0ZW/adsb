FROM node:lts-alpine AS build

WORKDIR /build

RUN apk add git; \
git clone https://github.com/dennisdunn/flightmon.git; 

COPY ./.env ./flightmon

RUN cd flightmon; \
npm install; \
npm run build

FROM node:lts-alpine

WORKDIR /adsb-client

RUN npm install -g serve

COPY --from=build /build/flightmon/build .

EXPOSE 80

CMD ["/usr/local/bin/serve", "-l", "tcp://0.0.0.0:80", "-s", "-n", "/adsb-client"]
