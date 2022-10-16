const {Router} = require('express')
const router = Router()
const {clientController} = require('../controllers/client.controller')




router.post('/client', clientController.createClient)

module.exports = router