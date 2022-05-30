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

