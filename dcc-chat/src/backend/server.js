const http = require('http')
const { Server } = require("socket.io")

const httpServer = http.createServer();

const PORT = process.env.PORT || 3001

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
})

io.on("connection", async (socket) => {
    console.log("user connected: ", socket.id)
})

httpServer.listen(PORT, () => {
    console.log("Socket.io server is running on port " + PORT)
})
