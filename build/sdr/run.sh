#!/bin/sh

echo "Listening on $PORT"
 rtl_adsb | nc -lk -p $PORT

