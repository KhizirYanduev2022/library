
const express = require('express')
const Review = require('../models/review.model')


module.exports.reviewController = {
 createReview: async (req,res) => {
    try {
        const review = await Review.create(req.body)   
        res.json(review)
    } catch (error) {
        res.json(error)
    }  
  
 },



}