const express = require('express')
const router = express.Router()
const {signup,login} = require('../controller/userAuth');
const signupSchema = require('../validators/auth-validator')
const validate = require('../middlewares/validate-middlewares')
const {createEvent,showEvent,deleteEvent,getEvent,updateEvent} = require('../controller/eventsAuth')
const {user} = require('../controller/userAuth')
const authMiddleware = require('../middlewares/auth-middleware');


//<---------------------------------------Routers---------------------------------------------------->


router.post('/signup',validate(signupSchema),signup);
router.post('/login',login);
router.get('/user', authMiddleware, user);
router.post('/createEvent', authMiddleware, createEvent);
router.get('/showEvent', showEvent)
router.delete('/event/:id', authMiddleware, deleteEvent);
router.get('/event/:id', authMiddleware, getEvent);
router.put('/event/:id', authMiddleware, updateEvent);



module.exports = router;
