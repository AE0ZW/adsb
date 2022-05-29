# ADS-B Flight Traacker

This tracker uses `rtl_adsb` instead of the ubiquitous `dump1090` to provide raw ADS-B packets to 
a `node-red` application.

## Installation

1. Clone the repository. 
```bash
git clone https://github.com/ke8hmv/adsb-nodered.git`
2. cd adsb-nodered
```
3. Install dependencies. 
```bash 
docker run -it --rm -v $(pwd)/src/nodered:/data --entrypoint sh nodered/node-red
cd /data
npm install
exit
```
4. Start the containers.
```bash
docker compose up
```
5. Open your browser to `http://localhost:1880/flights`

