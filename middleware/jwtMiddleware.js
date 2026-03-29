jsonwebtoken=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{

    console.log("inside jwtMiddleware");

    console.log(req.headers['authorization']);
    

    const token=req.headers['authorization'].split(" ")[1]
    console.log(token);
    
    

    if(token){
        try{
            const jwtResponse=jsonwebtoken.verify(token,process.env.JWTPASSWORD)
            console.log(jwtResponse);
            

                req.userId=jwtResponse.userid
                console.log(req.userId);
                
                next()
    
        }
        catch(err){
            res.status(401).json("Authorization is failed...please login")
        }
    }
    else{
        res.status(400).json("Authontication is failed.... Token is missing")
    }
    
}

module.exports=jwtMiddleware