#!/bin/sh

echo "LAT $STA_LAT"
echo "LON $STA_LON"

/usr/bin/dump1090 --net --quiet --write-json /data --lat $STA_LAT --lon $STA_LON

