const mongoose = require('mongoose')

genreSchema = mongoose.Schema({
    name: String,
    bookid:{
        
    }
})

const Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre