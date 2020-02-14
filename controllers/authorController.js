var Author = require('../models/author');

//display list of all authors
exports.author_list = function(req,res){
    res.send();
}
//detail page for specific author
exports.author_detail = function(req,res){
    res.send('' + req.params.id);
}
//create form on get
exports.author_create_get = function(req,res){
    res.send();
}
//create form on post
exports.author_create_post = function(req,res){
    res.send();
}
//delete form on get
exports.author_delete_get = function(req,res){
    res.send();
}
//delete form on get
exports.author_delete_post = function(req,res){
    res.send();
}
//update form on get
exports.author_update_get = function(req,res){
    res.send();
}
//update form on post
exports.author_update_post = function(req,res){
    res.send();
}