var express = require('express');
var router = express.Router();

//requrie controller
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var bookinstance_controller = require('../controllers/bookinstanceController');
var genre_controller = require('../controllers/genreController');

///Book Routes///
//home page
router.get('/', book_controller.index);
//get request for creating a book
router.get('/book/create', book_controller.book_create_get);
//post req for book creation
router.post('/book/create', book_controller.book_create_post);
//get delete req
router.get('/book/:id/delete', book_controller.book_delete_get);
//post delete req
router.post('/book/:id/delete', book_controller.book_delete_post);
//get update req
router.get('/book/:id/update', book_controller.book_update_get);
//post update req
router.post('/book/:id/update', book_controller.book_update_post);
//get req for one book
router.get('/book/:id', book_controller.book_detail);
//get req for book list
router.get('/book', book_controller.book_list);

///author Routes///

//get request for creating a book
router.get('/author/create', author_controller.author_create_get);
//post req for book creation
router.post('/author/create', author_controller.author_create_post);
//get delete req
router.get('/author/:id/delete', author_controller.author_delete_get);
//post delete req
router.post('/author/:id/delete', author_controller.author_delete_post);
//get update req
router.get('/author/:id/update', author_controller.author_update_get);
//post update req
router.post('/author/:id/update', author_controller.author_update_post);
//get req for one book
router.get('/author/:id', author_controller.author_detail);
//get req for book list
router.get('/author/', author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre_controller.genre_create_get);
//POST request for creating Genre.
router.post('/genre/create', genre_controller.genre_create_post);
// GET request to delete Genre.
router.get('/genre/:id/delete', genre_controller.genre_delete_get);
// POST request to delete Genre.
router.post('/genre/:id/delete', genre_controller.genre_delete_post);
// GET request to update Genre.
router.get('/genre/:id/update', genre_controller.genre_update_get);
// POST request to update Genre.
router.post('/genre/:id/update', genre_controller.genre_update_post);
// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);
// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list);


/// BOOK INSTANCE ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/bookinstance/create', bookinstance_controller.bookinstance_create_get);
//POST request for creating Genre.
router.post('/bookinstance/create', bookinstance_controller.bookinstance_create_post);
// GET request to delete Genre.
router.get('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_get);
// POST request to delete Genre.
router.post('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_post);
// GET request to update Genre.
router.get('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_get);
// POST request to update Genre.
router.post('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_post);
// GET request for one Genre.
router.get('/bookinstance/:id', bookinstance_controller.bookinstance_detail);
// GET request for list of all Genre.
router.get('/bookinstance', bookinstance_controller.bookinstance_list);

module.exports = router;