FROM alpine AS build

WORKDIR /build

RUN apk update --no-cache
RUN apk add --no-cache rtl-sdr build-base git ncurses-dev libusb-dev librtlsdr-dev
RUN git clone https://github.com/flightaware/dump1090.git 
RUN cd dump1090 && \
    make RTLSDR=yes

FROM alpine

RUN apk update --no-cache
RUN apk add --no-cache rtl-sdr ncurses libusb librtlsdr

COPY --from=build /build/dump1090/*1090 /usr/bin/

EXPOSE 30001 30002 30003 30004 30005 30104

ENTRYPOINT ["/usr/bin/dump1090", "--net", "--quiet"]
