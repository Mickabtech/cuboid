require('dotenv').config();
const { Server } = require("socket.io");

const CORS_URL = process.env.CORS_URL;
const PORT = process.env.PORT || 3000;

if (!CORS_URL) {
  console.error("CORS_URL is not defined in the environment variables.");
  process.exit(1);
}

const io = new Server({ cors: { origin: CORS_URL } });

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);

  socket.on("addNewUser", (userId) => {
    if (!onlineUsers.some((user) => user.userId === userId)) {
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });
    }

    console.log("Online users:", onlineUsers);
    io.emit("getOnlineUsers", onlineUsers);
  });

  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find((user) => user.userId === message.recipientId);

    if (user) {
      io.to(user.socketId).emit("getMessage", message);
      io.to(user.socketId).emit("getNotification", {
        senderId: message.senderId,
        isRead: false,
        date: new Date(),
      });
    } else {
      console.log(`User ${message.recipientId} not found.`);
    }
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);

    console.log(`Disconnected: ${socket.id}`);
    console.log("Online users:", onlineUsers);
    io.emit("getOnlineUsers", onlineUsers);
  });

  // Error handling for socket events
  socket.on("error", (err) => {
    console.error(`Socket error: ${err}`);
  });
});

io.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
