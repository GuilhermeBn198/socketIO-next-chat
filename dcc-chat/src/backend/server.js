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

    socket.on("join_room", (userName) => {
        console.log(`Username: ${userName} - Socket: ${socket.id}`);
    })

    socket.on("send-message", (msg) => {
        console.log(msg, "MSG");
        io.emit("receive-msg", msg)
    })
})

httpServer.listen(PORT, () => {
    console.log("Socket.io server is running on port " + PORT)
})
