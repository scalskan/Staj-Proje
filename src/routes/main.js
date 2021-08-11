const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req,res) => {
    //veritabanindaki tum postlar getirildi ve gonderildi
    Post.find({}).lean().then(posts => {
        res.render('site/index', {posts:posts})
    })
})
router.get('/about', (req,res) => {
    res.render('site/about')
})
router.get('/blog', (req,res) => {

    //veritabanindaki tum postlar getirildi ve gonderildi
    Post.find({}).lean().then(posts => {
        res.render('site/blog', {posts:posts})
    })
})
router.get('/contact', (req,res) => {
    res.render('site/contact')
})
router.get('/login', (req,res) => {
    res.render('site/login')
})
router.get('/register', (req,res) => {
    res.render('site/register')
})


module.exports = router


