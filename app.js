var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var cors = require("cors");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");

// routes
// import authRoutes from "./routes/api/auth";
var attenderRoutes = require("./routes/api/attender");

const { MONGO_URI, MONGO_DB_NAME } = config;

const app = express();

// CORS Middleware
app.use(cors());
// Logger Middleware
app.use(morgan("dev"));
// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = `${MONGO_URI}/${MONGO_DB_NAME}`;
// Connect to Mongo
mongoose
	.connect(MONGO_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	}) // Adding new mongo url parser
	.then(() => console.log("MongoDB Connected..."))
	.catch((err) => console.log(err));

// Use Routes
app.use("/api/attenders", attenderRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("app_client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

// export default app;
module.exports = app;
