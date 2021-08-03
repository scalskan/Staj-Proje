const mongoose=require('mongoose')

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/BProject_test_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

Post.create({
    title: 'ilk baslik',
    content: 'Post icerigi, lorem ipsum text'
}, (error, post)=> {
    console.log(error, post)
})


