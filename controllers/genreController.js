var genre = require('../models/genre');

//display list of all genres
exports.genre_list = function(req,res){
    res.send();
}
//detail page for specific genre
exports.genre_detail = function(req,res){
    res.send('' + req.params.id);
}
//create form on get
exports.genre_create_get = function(req,res){
    res.send();
}
//create form on post
exports.genre_create_post = function(req,res){
    res.send();
}
//delete form on get
exports.genre_delete_get = function(req,res){
    res.send();
}
//delete form on get
exports.genre_delete_post = function(req,res){
    res.send();
}
//update form on get
exports.genre_update_get = function(req,res){
    res.send();
}
//update form on post
exports.genre_update_post = function(req,res){
    res.send();
}