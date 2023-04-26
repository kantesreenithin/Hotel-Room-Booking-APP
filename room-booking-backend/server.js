const express = require("express");
const app = express();
const dbconfig = require("./db");
const roomsRoute = require("./routes/roomsRoute");
const usersRoute = require("./routes/usersRoute");
const bookingsRoute = require("./routes/bookingsRoute");
app.use(express.json());

app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingsRoute);
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
