# ADS-B Flight Traacker

This tracker uses `rtl_adsb` instead of the ubiquitous `dump1090` to provide raw ADS-B packets to 
a `node-red` application.

## Installation

1. Clone the repository. 
```bash
git clone https://github.com/ke8hmv/adsb-nodered.git
cd adsb-nodered
```
2. Start the containers. `docker compose up -d` Node-red will automatically install the dependencies.
3. Open your browser to `http://localhost:1880/flights`

## Kiosk Mode

This application works really well in kiosk mode. `firefox --kiosk http://localhost:1880/flights`

## Processing Pipeline

Mosquitto MQ is used instead of Node-Red links to pass information between flows. This allows other applications to 
tap into the pipeline at any point and provide further processing. Mosquitto is exposed on port `1883`.

The MQTT topics are:
* adsb/raw
* adsb/decoded
* adsb/aircraft
