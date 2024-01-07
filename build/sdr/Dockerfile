FROM alpine

WORKDIR /data

RUN apk update --no-cache && \
    apk add --no-cache rtl-sdr 

ENV PORT=32000

COPY run.sh .
RUN chmod +x run.sh

EXPOSE 32000

ENTRYPOINT ["./run.sh"]
