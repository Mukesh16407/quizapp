const express = require("express");
const app = express();
const connect = require("./config/dbConfig");

require("dotenv").config();
app.use(express.json());

const usersRoute = require("./routes/userRoutes");



app.use("/api/users", usersRoute);
const port = process.env.PORT || 5000;

const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client" , "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });   
} 

app.listen(port, () => {
  connect()
  console.log(`Server listening on port ${port}`);
});
