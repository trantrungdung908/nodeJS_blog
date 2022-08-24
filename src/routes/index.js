const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  //trang news
  app.use("/news", newsRouter);

  //trang home
  app.use("/", siteRouter);

  //trang search
  //Action --- Dispatcher ---> Function handler
  //   app.get("/search", (req, res) => {
  //     //query thi .query
  //     res.render("search");
  //   });
  //   app.post("/search", (req, res) => {
  //     // post thi .body
  //     console.log(req.body);
  //     res.send("");
  //   });
}

module.exports = route;
