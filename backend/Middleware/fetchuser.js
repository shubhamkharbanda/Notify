var jwt = require('jsonwebtoken');
var secret='shubhamiscool$'
const fetchuser=async (req,res,next)=>{



    const token=await req.header('auth-token');
    
    
    if(!token){
        res.status('400').json('You are not loggedin')
    }
    else{

        try{


        // const data=await 
        
            const data=await jwt.verify(token,secret)
       
        req.user =await data;

        
        
        next();
    }catch{

        res.status('400').json('You are not authorized')

    }

        
        
        
        
        
        
    }
   

}
module.exports=fetchuser;