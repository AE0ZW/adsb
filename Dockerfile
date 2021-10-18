FROM alpine:3.12.7 AS  base

RUN apk add --update nodejs nodejs-npm \
&& npm install -g serve

FROM base as build

WORKDIR /var/build

COPY ./ .

RUN npm install
RUN npm run build

FROM base

WORKDIR /adsb

COPY --from=build /var/build/build .

EXPOSE 80

CMD ["/usr/bin/serve", "-l", "tcp://0.0.0.0:80", "-s", "-n", "/adsb"]
