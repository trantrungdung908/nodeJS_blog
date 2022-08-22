const express = require("express");
// tra ve doi tuong xay dung ra web
const app = express();
// cổng
const port = 3000;

//định nghĩa route(tuyến đường)
app.get("/tin-tuc", (req, res) => {
  res.send("Hello World!");
});
// chay server ( node index.js)
//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
