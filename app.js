const express = require("express");
const exphbs = require("express-handlebars");
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


mongoose.connect("mongodb://127.0.0.1/BProject_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(express.static("public"));


app.engine("handlebars", expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}), exphbs());
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());


const main = require("./routes/main");
const posts = require("./routes/posts");
app.use("/", main);
app.use("/posts", posts);


app.listen(port, hostname, () => {
  console.log(` Example app listening, http://${hostname}:${port}/`);
});