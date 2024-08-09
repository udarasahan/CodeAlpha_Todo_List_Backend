import jwt from "jsonwebtoken";

const authMiddleware = async (req,res,next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({succes:false,message:"Not Autherized. Login Again"})
    }
    try {
        const token_decade = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decade.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({succes:false,message:"Error"})
    }
}

export default authMiddleware;