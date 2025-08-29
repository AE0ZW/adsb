FROM alpine

RUN apk add rtl-sdr

EXPOSE 8080

ENTRYPOINT ["/bin/sh", "-c", "while true; do /usr/bin/rtl_adsb | nc -lp 8080; done"]

