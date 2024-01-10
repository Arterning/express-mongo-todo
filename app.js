var express = require("express");
var todoController = require("./controllers/todoController");
var testController = require("./controllers/testController");
var app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

app.use("/", todoController);
app.use("/test", testController);

function loggingMiddleware(req, res, next) {
  const time = new Date();
  console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`);
  console.log("you are great");
  next();
}

app.use(loggingMiddleware);

app.listen(3000);

console.log("listening to port http://localhost:3000/todo");
