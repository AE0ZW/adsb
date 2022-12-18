# ADS-B Flight Traacker

This tracker uses `rtl_adsb` instead of the ubiquitous `dump1090` to provide raw ADS-B packets to 
a `node-red` application. The adsb application should publish the raw data using a tool such as `socat`.

## Installation

1. Clone the repository. 
```bash
git clone https://github.com/ke8hmv/adsb-nodered.git
cd adsb-nodered
```
2. Start the containers. `docker compose up -d` Node-red will automatically install the dependencies.
1. Configure the IP address of the rtl_adsb datasource at `http://localhost:1880`
1. Open your browser to `http://localhost:1880/flights`

## Kiosk Mode

This application works really well in Firefox kiosk mode. `firefox --kiosk http://localhost:1880/flights`
