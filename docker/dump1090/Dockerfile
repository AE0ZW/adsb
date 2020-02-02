FROM debian:buster-slim as runtime

RUN apt update;\
    apt upgrade -y; \
    apt install -y librtlsdr-dev

FROM runtime as build

WORKDIR /build

RUN apt install -y git gcc make pkg-config; \
    git clone https://github.com/antirez/dump1090 ; \
    cd dump1090; \
    sed -i 's/$(shell pkg-config --libs librtlsdr)/-lrtlsdr/' Makefile ; \
    make

FROM runtime

WORKDIR /adsb-server

COPY --from=build /build/dump1090/dump1090 .

EXPOSE 8080
EXPOSE 30001
EXPOSE 30002
EXPOSE 30003

CMD ["./dump1090", "--net-only"]
