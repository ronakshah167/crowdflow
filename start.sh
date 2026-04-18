#!/bin/sh
# Start the Socket.io server in the background
node server/index.js &
# Start the Next.js server
node server.js
