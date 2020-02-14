var bookinstance = require('../models/bookinstance');

//display list of all bookinstances
exports.bookinstance_list = function(req,res){

    bookinstance.find()
        .populate('book')
        .exec(function(err, list_bookinstance){
            if(err) {return next(err);}
            //success
            res.render('bookinstance_list', {title: 'Book Instance List', bookinstance_list: list_bookinstance});
        });
}
//detail page for specific bookinstance
exports.bookinstance_detail = function(req,res){
    res.send('' + req.params.id);
}
//create form on get
exports.bookinstance_create_get = function(req,res){
    res.send();
}
//create form on post
exports.bookinstance_create_post = function(req,res){
    res.send();
}
//delete form on get
exports.bookinstance_delete_get = function(req,res){
    res.send();
}
//delete form on get
exports.bookinstance_delete_post = function(req,res){
    res.send();
}
//update form on get
exports.bookinstance_update_get = function(req,res){
    res.send();
}
//update form on post
exports.bookinstance_update_post = function(req,res){
    res.send();
}