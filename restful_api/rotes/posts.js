const express = require('express');
const Posts = require('../models/Posts');
const router = express.Router();
const post = require('../models/Posts');

router.get('/', async (req, res) => {
    try{
         const posts = await post.find();
         res.json(posts);
    }catch(err){
        res.json( {message: err});
    }
});

router.post('/',async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    });
    try{
    const savedPost = post.save();
    res.json(savedPost);
    } catch(err){
        res.json( {message: err});
    }
});

module.exports = router;