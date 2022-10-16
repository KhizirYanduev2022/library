const express = require('express')
const Genre = require('../models/genre.model')

module.exports.genreController = {
 createGenre:(req,res) => {
    Genre.create(req.body,(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })
 }
}