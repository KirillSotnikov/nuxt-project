const {Router} = require('express')
const passport = require('passport')
const router = Router()

//- Controllers list
const {login, createUser} = require('../controllers/auth.controller')

//- /api/auth/admin/login
router.post('/admin/login', login)

//- /api/auth/admin/create
router.post(
  '/admin/create', 
  passport.authenticate('jwt', {session: false}),
  createUser
)

module.exports = router