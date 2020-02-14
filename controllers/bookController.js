var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

exports.index = function(req, res) {   
    
    async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback);
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};
//display list of all books
exports.book_list = function(req,res){
    
    Book.find({}, 'title author')
        .populate('author')
        .exec(function(err, list_books){
            if(err) return next(err);
            //success
            res.render('book_list', {title: 'Book List', book_list:list_books});
        });
};
//detail page for specific book
exports.book_detail = function(req,res){
    res.send('' + req.params.id);
}
//create form on get
exports.book_create_get = function(req,res){
    res.send();
}
//create form on post
exports.book_create_post = function(req,res){
    res.send();
}
//delete form on get
exports.book_delete_get = function(req,res){
    res.send();
}
//delete form on get
exports.book_delete_post = function(req,res){
    res.send();
}
//update form on get
exports.book_update_get = function(req,res){
    res.send();
}
//update form on post
exports.book_update_post = function(req,res){
    res.send();
}