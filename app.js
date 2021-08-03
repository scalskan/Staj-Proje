const express = require('express')
var exphbs = require('express-handlebars')
const app = express()
const port = 3000
const hostname= '127.0.0.1'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1/BProject_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//middleware
app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const main = require('./routes/main')
const posts = require('./routes/posts')
app.use('/', main)
app.use('/posts', posts)

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})


