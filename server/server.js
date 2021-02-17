const production = process.env.NODE_ENV === "production";
const clientUrl = production ? "realsite.com" : "http://localhost:1234";

const io = require("socket.io")(3000, {
  cors: {
    origin: clientUrl
  }
});

io.on("connection", (socket) => {
  console.log("here");
});
