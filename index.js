const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();


// app.get("/",(req,res)=>{
//   res.send("test")
// })


require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();


console.log(process.env.NODE_ENV === undefined)

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
