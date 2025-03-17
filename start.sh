#!/bin/sh
#
docker run --restart=unless-stopped -d -p 1880:1880 -v ./data:/data --network=host nodered/node-red:latest-minimal
