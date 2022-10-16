const mongoose = require('mongoose')

 reviewSchema = mongoose.Schema({
    text: String,
    client:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Client'  
    },
    book:{
       type:mongoose.SchemaTypes.ObjectId,
       ref: 'Book'
    }
    })

const Review =  mongoose.model('Review', reviewSchema)

module.exports = Review
