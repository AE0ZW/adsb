FROM alpine:3.12.7 

WORKDIR /var/build

RUN apk add --no-cache python3 py3-pip 

RUN pip3 install mqttcat

ENTRYPOINT ["/bin/sh"]

