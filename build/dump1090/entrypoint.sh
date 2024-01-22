#!/bin/sh

/usr/bin/dump1090 --net --quiet --device ${DEVICE} --write-json /run/dump1090 --lat $STA_LAT --lon $STA_LON --json-location-accuracy $LOC_ACCURACY

