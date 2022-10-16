
const {bookController} = require('../controllers/book.controller')
const {Router} = require('express')
const router = Router()


router.post('/book',bookController.createBook)
router.get('/book/genre/:id', bookController.findBookByGenre)
router.get('/book/:id',bookController.findBook)
router.patch('/book', bookController.updateBook)
router.patch('/book/givebook', bookController.giveBook)



module.exports = router


