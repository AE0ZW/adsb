FROM alpine

WORKDIR /var/build

RUN apk add --no-cache musl librtlsdr mosquitto-clients rtl-sdr

CMD ["/bin/sh", "-c", "rtl_adsb | mosquitto_pub -h mq --stdin-line --topic adsb/raw"]
