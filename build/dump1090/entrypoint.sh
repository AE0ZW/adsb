#!/bin/sh

echo "Lat $STA_LAT"
echo "Lon $STA_LON"
echo "Location accuracy $lOC_ACCURACY"

/usr/bin/dump1090 --net --quiet --write-json /data --lat $STA_LAT --lon $STA_LON --json-location-accuracy $LOC_ACCURACY

