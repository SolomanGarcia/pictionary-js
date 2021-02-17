const production = process.env.NODE_ENV === "production";
const clientUrl = production ? "realsite.com" : "http://localhost:1234";

const io = require("socket.io")(3000, {
  cors: {
    origin: clientUrl
  }
});

const rooms = {};

io.on("connection", (socket) => {
  socket.on("join-room", (data) => {
    const user = { id: socket.id, name: data.name, socket: socket };
    let room = rooms[data.roomId];
    if (room == null) {
      room = { users: [], id: data.roomId };
      rooms[data.roomId] = room;
    }

    room.users.push(user);
    socket.join(room.id);
    console.log(room);
  });
});
