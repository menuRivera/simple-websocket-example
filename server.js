const { Server } = require("socket.io")

const io = new Server()

io.on("connection", (socket) => {
    console.log('New socket');

    const data = "Hi there client!!"
    console.log("Sending custom event: '" + data + "' to " + socket.id);
    socket.emit("custom-name-event", data)

    socket.on('custom-name-event', (data) => {
        console.log('Custom event received: ' + data);
    })
})

io.listen(8080)