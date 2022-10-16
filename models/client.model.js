const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    name: String,
    isBlocked:{  type: Boolean,
        default: false} ,
    rentBooks:{
        type: mongoose.SchemaTypes.Array,
        ref: 'Book'
    },
    reviewId: {
        type: mongoose.SchemaTypes.Array,
        ref: 'Review'
    }
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client