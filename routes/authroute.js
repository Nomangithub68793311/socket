import express from 'express';
const router = express.Router();
import Signup from '../controllers/checkSocket.js'
import Login from '../controllers/Login.js'

router.get('/checksocket', Signup)
router.get('/login', Login)


export default router;