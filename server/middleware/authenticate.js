const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");


const Authenticate = async (req, res, next) => {
    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!rootUser) { throw new Error('User not Found')}

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser.id;
         
        next();

    } catch(err) {
     res.status(401).send('Unauthrized: no token provided');
     console.log(err);
    }
}

module.exports = Authenticate;