const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const { extname } = require("path");

// tra ve doi tuong xay dung ra web
const app = express();
// cổng
const port = 3000;

//config static file
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

// template engines
app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//định nghĩa route(tuyến đường)
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});
// chay server ( node index.js)
//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
