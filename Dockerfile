FROM nodered/node-red:latest-minimal

WORKDIR /usr/src/node-red

RUN npm install node-red-contrib-functionx \
node-red-contrib-npm \
node-red-contrib-ui-clock \
node-red-contrib-web-worldmap \
node-red-dashboard \
node-red-contrib-uibuilder \
node-red-node-ui-table

