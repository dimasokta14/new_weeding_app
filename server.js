// import app from "./app";
// import config from "./config";
var app = require("./app");
var config = require("./config");

const { PORT } = config;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
