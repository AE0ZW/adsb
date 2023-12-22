#!/bin/sh

rtl_adsb | mosquitto_pub -h mqtt -t "adsb" -l

