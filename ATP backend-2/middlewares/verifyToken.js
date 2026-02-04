import jwt from "jsonwebtoken";

export function verifyToken(req,res,next){
    //token verification logic
    //1.get token from req
      //console.log(req.cookies)//{token:""}
      let signedToken=req.cookies.token;
      if(!signedToken){
        return res.status(401).json({message:"Unauthorized"})
      }

    //2.verify token
    try{
        let decodedToken=jwt.verify(signedToken,'abcdef')
        console.log("decodedToken:",decodedToken)
        next()
    }
    catch(err){
        if(err.name==="TokenExpiredError"){
            return res.status(401).json({message:"Token expired, please login again"})
        }
        return res.status(403).json({message:"Invalid token"})
    }
}
