const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')

// register

const registerUser = async(req,res)=>{
    const {userName,email,password} = req.body;

    try {

        const checkUser = await User.findOne({email})
        if(checkUser) res.json({success:false,message:"User Alredy Registered!"})

        const hashPassword = await bycrypt.hash(password,12);

        const newUser = new User({
            userName,
            email,
            password:hashPassword
        })
        await newUser.save();

        res.status(200).json({
            success:true,
            message:"registered successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:'error while registering'
        })
        
    }
}


//login
const login = async(req,res)=>{

    const {email,password} = req.body;
    
    try {

        const checkUser = await User.findOne({email})
        if(!checkUser){
            return res.json({success:false,message:"register the user!"})
        }

        const checkPassword = await bycrypt.compare(password,checkUser.password);
        if(!checkPassword){
            return res.json({
                success:false,
                message:"password is incorrect"
            })
        }

        const token = jwt.sign(
            {
                email:checkUser.email,
                role:checkUser.role,
                id:checkUser._id
            },
            'password_client_for_jwt',
            {
                expiresIn:'1d'
            }
        )

        res.cookie('token',token,{httpOnly:true,secure:false}).json({
            success:true,
            message:'loggedIn successfully',
            user:{
                email:checkUser.email,
                id:checkUser._id,
                role:checkUser.role
            }
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:'error while registering'
        })
        
    }
}

//logout

const logout = (req,res)=>{

    res.clearCookie(token).json({
        success:true,
        message:"user loggedOut"
    })

}

//middle ware for auth

const authMiddleWare = async(req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            success:false,
            message:'unauthorized user'
        })
    }
    try {
        const decoded = jwt.verify(token,'password_client_for_jwt');
        req.user = decoded
        next();
    } catch (error) {
         res.status(401).json({
            success:false,
            message:'unauthorized user'
        })
        
    }
}

module.exports = {registerUser,login,logout,authMiddleWare}