const {Router} = require('express')
const router = Router()

//- Controllers list
const {login, createUser} = require('../controllers/auth.controller')

//- /api/auth/login
router.post('/admin/login', login)

//- /api/auth/create
router.post('/admin/create', createUser)

module.exports = router