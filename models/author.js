var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;


var authorSchema = new Schema(
    {
        first_name: {type: String, useUnifiedTopology: true, max: 100},
        last_name: {type: String, useUnifiedTopology: true, max: 100},
        date_of_birth: {type: Date},
        date_of_death: {type: Date}
    }
);

//virtual for author's fullName
authorSchema.virtual('name')
.get(function(){

// To avoid errors in cases where an author does not have either a family name or first name
// We want to make sure we handle the exception by returning an empty string for that case
    var fullName = '';
    if(this.first_name && this.last_name){
        fullName = this.last_name + ' ' + this.first_name;
    }
    if(!this.first_name || !this.last_name){
        fullName = '';
    }
    return fullName;
});

// Virtual for author's lifespan
authorSchema
.virtual('lifespan')
.get(function(){
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

//Virtualfor authors url
authorSchema
.virtual('url')
.get(function(){
    return '/catalog/author/' + this._id;
});

authorSchema
.virtual('dob')
.get(function(){
    return this.date_of_birth ? moment(this.date_of_birth).format('MMMM Do, YYYY') : '';
});

authorSchema
.virtual('dod')
.get(function(){
    return this.date_of_death ? moment(this.date_of_death).format('MMMM Do, YYYY') : '';
});

//export model
module.exports = mongoose.model('Author', authorSchema);