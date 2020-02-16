var Genre = require('../models/genre');
var Book = require('../models/book');
var async = require('async');
const validator = require('express-validator');

//display list of all genres
exports.genre_list = function(req,res){
    
    Genre.find()
    .exec(function(err, list_genre){
        if(err) return next(err);
        console.log(list_genre);
        res.render('genre_list', {title: 'Genre List', genre_list: list_genre});
    })
}
//detail page for specific genre
exports.genre_detail = function(req,res, next){
    async.parallel({
        genres: function(callback){
            Genre.findById(req.param.id)
                .exec(callback)
        },  
        genre_book: function(callback){
            
            Book.find({'genres': req.param.id})
                .exec(callback)
        }
    }, function(err, results){
        if (err) {return next(err);}

        if(results.genre===null) { //No result
            var error = new Error('Genre Not Found!');
            err.status = 404;
            return next(err);
        }
        //success
        console.log(results.genres);
        res.render('genre_detail', {
            title: 'Genre Detail', 
            genres: results.genres, 
            genre_books: results.genre_book});
    })
};
//create form on get
exports.genre_create_get = function(req,res){
    res.render('genre_form', {title:'Create Genre'});
}
//create form on post
exports.genre_create_post = [
    //validate the name field
    validator.body('name', 'Genre name is required!').isLength({min: 1}).trim(),
    //sanitize the name field
    validator.sanitizeBody('name').escape(),

    //process the req after validation and sanitization
    (req, res, next) => {
        //extract errors

        const errors = validator.validationResult(req);

        //create genre object with trimmed and escaped
        var genre = new Genre(
            {name: req.body.name}
        );

        if (!errors.isEmpty()){
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
            return;
        }
        else{
            // Data from form is valid.
            // Check if Genre with same name already exists.
            Genre.findOne({ 'name': req.body.name })
            .exec( function(err, found_genre) {
                if (err) { return next(err); }

                if (found_genre) {
                // Genre exists, redirect to its detail page.
                res.redirect(found_genre.url);
                }
                else {

                genre.save(function (err) {
                    if (err) { return next(err); }
                    // Genre saved. Redirect to genre detail page.
                    res.redirect(genre.url);
                });

                }

            });
        }
    }
];
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