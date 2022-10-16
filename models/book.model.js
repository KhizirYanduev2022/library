const mongoose = require('mongoose')
 
const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    genre: {
        type: mongoose.SchemaTypes.Array,
        ref: 'Genre'
    },

    review: {
        type: mongoose.SchemaTypes.Array,
        ref: 'Review'
    },
    
    rent: {
        type: mongoose.SchemaTypes.Array,
        ref: 'Client'
    }
    
})


const Book = mongoose.model('Book',bookSchema)
module.exports = Book