const router = require('express').Router();
const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config")
const { verifyUserToken } = require("../middleware/auth")


router.route("/getUser").get((req,res)=>{
    User.find()
    .then(users =>{ 
        console.log(users);
        res.json(users)
    })
    .catch((e) => res.status(400).json('Error ' + e));

})


router.route("/signup").post(async(req,res)=>{
    const salt = await bcrypt.genSalt(10);
    console.log(req.body.password);
    console.log(req.body.userName);
    console.log(req.body.email)
    const hasPassword = await bcrypt.hash(req.body.password, salt);
    const userName = req.body.userName;
    const email=  req.body.email ;
    const password= hasPassword;
    const newUser = new User({
        userName:userName,
        email : email ,
        password : password
    });

    newUser.save().then((registeredUser)=>{
        let payload = { id: registeredUser._id, user_type_id: req.body.user_type_id || 0 };
            const token = jwt.sign(payload, config.JWT_SECRET);
            res.status(200).send({ token })
    }).catch((e)=>res.status(400).json('Error ' + e))
});


router.route("/login").post( async(req,res)=>{
    console.log(req.body.userName)
    User.findOne({userName : req.body.userName})
    .then(async(user)=>{
  
            if (user) {
                const validPass = await bcrypt.compare(req.body.password, user.password);
               
                if (!validPass) return res.status(401).send("Mobile/Email or Password is wrong");

                // Create and assign token
                let payload = { id: user._id, user_type_id: user.user_type_id };
                const token = jwt.sign(payload, config.JWT_SECRET);

                res.status(200).header("auth-token", token).send({ "token": token });
            }
            else {
                res.status(401).send('Invalid mobile')
            }

        
    })
    .catch((e)=>{
        console.log(e)
        res.send(e);
    })

})

 
router.route("/events").get(verifyUserToken);

router.route("/getData").get((req,res)=>{
    id = req.body.id;
    User.findById(id)
    .then(data =>{
        console.log(data,"data");
        res.json(data);
    })
    .catch((err)=>{
        res.status(400).json("Error : " + err);
    })
})
module.exports = router
