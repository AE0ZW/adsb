FROM alpine

WORKDIR /data

RUN apk add --no-cache rtl-sdr mosquitto-clients

COPY run.sh .
RUN chmod +x run.sh

CMD ["/data/run.sh"]

