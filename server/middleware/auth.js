
const jwt = require("jsonwebtoken");
const config = require("../config")
module.exports =  {
    verifyUserToken : (req, res, next) => {
        let token = req.headers.authorization;
        if (!token) return res.status(401).send("Access Denied / Unauthorized request");
    
        try {
            console.log(token)
    
            if (token === 'null' || !token) return res.status(401).send('Unauthorized request');
    
            let verifiedUser = jwt.verify(token, config.JWT_SECRET);  
            if (!verifiedUser) return res.status(401).send('Unauthorized request')
    
            req.user = verifiedUser;
            res.status(200).send(req.user);
            next();
    
        } catch (error) {
            console.log(error);
            res.status(400).send("Invalid Token");
        }
    
    }
}
