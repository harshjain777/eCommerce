const express = require('express')
const {registerUser, login, logout, authMiddleWare} = require('../../controllers/auth/auth.controller')

const router = express.Router();
router.post('/register',registerUser)
router.post('/login',login)
router.post('/logout',logout)
router.get('/checkauth',authMiddleWare,(req,res)=>{
    const user = req.user
    res.status(200).json({
        success:true,
        message:'user is authorized',
        user
    })
})

module.exports = router