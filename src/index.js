const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const { extname } = require("path");

const route = require("./routes/index");
// tra ve doi tuong xay dung ra web
const app = express();
// cổng
const port = 3000;

//middleware form submit vs html
app.use(
  express.urlencoded({
    extended: true,
  })
);
//middleware vs js ->fetch , axios , ajax ,...
app.use(express.json());

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
route(app);

// chay server ( node index.js)
//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
