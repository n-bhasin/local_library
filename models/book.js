var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'Author', required: true}, //reference to associated author
        summary: {type: String, required: true},
        isbn: {type: String, required: true},
        genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}] //ref to associated genre
    }
);


//virtual book's url
bookSchema
.virtual('url')
.get(function(){
    return '/catalog/book/' + this._id;
});
module.exports = mongoose.model('Book', bookSchema);