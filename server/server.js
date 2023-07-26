const { Server } = require("socket.io");

// listen on port 3000
const io = new Server(3000, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("Socket.io connected to socket: " + socket.id);

  socket.on("send-disp-list", (list) => {
    console.log("Received from controller: " + list);
    io.emit("receive-disp-list", list);
    console.log("Broadcasted the signal above to monitor");
  });

  socket.on("send-prepared-signal", (signalPackage) => {
    console.log("Received prepared from server");
    io.emit("receive-prepared-signal", signalPackage);
    console.log("Broadcasted the signal to client");
  });
});
