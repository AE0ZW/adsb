# dump1090-client
This is yet-another-take on a UI for the dump1090 program. dump1090 interfaces with a software
defined radio (SDR) to monitor the status transmissions of aircraft.

The app is built with:

- React
- Leafletjs
- OpenStreetMap
- Various goodness from npm.

![dump1090-client](dump1090-client.png)

## Features

- The center of the map is calculated from the initial fetch of data.json from the dump1090 daemon. The lat/lon of the aircraft are averaged and the map center set to the result.
- Each displayed airport has a color-coded set of range rings. The range increases 10 nmi per ring.
- The airports are ordered by their distance from the lat/lon average and the first 6 are displayed.
- Hovering an aircraft icon reveals the callsign or ICAO hex identifier of the aircraft.
- Clicking an aircraft or airport icon pops up information about the item.
- An initial configuration screen enables the user to enter the host and port of the dump1090 daemon.

