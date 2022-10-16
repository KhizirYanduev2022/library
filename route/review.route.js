const {Router} = require('express')
const router = Router()
const {reviewController} = require('../controllers/review.controller')


router.post('/review',reviewController.createReview)

module.exports = router
