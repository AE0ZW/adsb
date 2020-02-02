FROM debian:buster-slim as build

WORKDIR /build

RUN apt update; \
 apt install -y git gcc make pkg-config librtlsdr-dev; \
 git clone https://github.com/antirez/dump1090 ; \
 cd dump1090; \
 sed -i 's/$(shell pkg-config --libs librtlsdr)/-lrtlsdr/' Makefile ; \
 make

FROM debian:buster-slim 

WORKDIR /adsb-server

RUN apt update; apt install -y librtlsdr-dev

COPY --from=build /build/dump1090/dump1090 .

EXPOSE 8080
EXPOSE 30001
EXPOSE 30002
EXPOSE 30003

CMD ["/adsb-server/dump1090", "--net-only"]
