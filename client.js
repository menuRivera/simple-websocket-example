const { io } = require('socket.io-client')
const socket = io("ws://localhost:8080")

socket.on("connect", () => {
  console.log("WebSocket connected");
});

socket.on("disconnect", () => {
  console.log("WebSocket disconnected");
})

socket.on("custom-name-event", (data) => {
  console.log("Custom event received: ", data);

  const responseData = "Hi server!";

  console.log("Sending back to server: " + responseData)
  socket.emit('custom-name-event', responseData)
})