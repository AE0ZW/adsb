# ASD-B Receiver

This flight tracker is built with node-red. It takes SBS messages from dump1090 via
port 30003.

## Usage
`docker run -it -v $(pwd):/data -p 1880:1880 nodered/node-red:latest-minimal`

Connect to your dump1090 process by configuring the tcp node on the first flow.
