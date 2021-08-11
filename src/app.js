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
const fileUpload = require('express-fileupload')
const moment = require('moment')




mongoose.connect('mongodb://127.0.0.1/BProject_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(fileUpload())

app.use(express.static('public'));

const hbs = exphbs.create({
  helpers: {
    generateDate : (date, format) => {
      return moment(date).format(format)
    }
  }
})

app.engine('handlebars', expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  helpers:{
    generateDate:(date, format)=>{
        return moment(date).format(format);
    }
}
}));
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());


const main = require("./routes/main");
const posts = require("./routes/posts");
app.use("/", main);
app.use("/posts", posts);


app.listen(port, hostname, () => {
  console.log(` Example app listening, http://${hostname}:${port}/`);
});