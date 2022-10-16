const {Router} = require('express')
const router =  Router()
const {genreController} = require('../controllers/genre.controller')


router.post('/genre', genreController.createGenre)


module.exports = router

