var express = require("express");
var todoController = require("./controllers/todoController");
var protectedController = require("./controllers/protectedController");
var { expressjwt: jwt } = require("express-jwt");
var app = express();
const SECRET_KEY = 'login2021'

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));


app.use(todoController);
app.get('/index', (req, res) => {
  res.render('index', { name: 'arterning' })
})

app.use("/protected",
  jwt({
      secret: SECRET_KEY,
      algorithms: ['HS256'], // 使用何种加密算法解析
  }).unless({ path: ['/login', '/signup'] }) // 登录页无需校验
);
app.use("/protected", protectedController);


function loggingMiddleware(req, res, next) {
  const time = new Date();
  console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`);
  console.log("you are great");
  next();
}

app.use(loggingMiddleware);



app.listen(3000);

console.log("listening to port http://localhost:3000");
