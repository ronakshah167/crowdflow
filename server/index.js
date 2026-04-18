const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Mock simulation logic
let crowdData = {
    occupancy: 18432,
    avgWait: 4.2,
    alerts: 2,
    sectors: [
        { id: 'A', density: 75, speed: 1.2 },
        { id: 'B', density: 45, speed: 1.5 },
        { id: 'C', density: 90, speed: 0.8 },
    ]
};

// Simulate real-time updates
setInterval(() => {
    crowdData.occupancy += Math.floor(Math.random() * 10) - 5;
    crowdData.avgWait = +(crowdData.avgWait + (Math.random() * 0.2 - 0.1)).toFixed(1);

    io.emit('crowd:update', crowdData);
}, 3000);

io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    socket.emit('crowd:initial', crowdData);

    socket.on('admin:alert', (msg) => {
        io.emit('broadcast:alert', msg);
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`CrowdFlow Server running on port ${PORT}`);
});
