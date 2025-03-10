#!/usr/bin/env sh

dump1090 --net --quiet \
	 --device ${DEVICE_SN} \
	 --write-json /run/dump1090 \
	 --lat ${STA_LAT} --lon ${STA_LON} \
         --json-location-accuracy ${LOC_ACCURACY}

