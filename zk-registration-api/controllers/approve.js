const pool = require("../database");
 
module.exports.approve = async function(req,res){
     var body = req.body;
     var json_=JSON.stringify(body);
     var jsonobj =(JSON.parse(json_));
     
 
 
    var sql=`UPDATE users SET isVerified=true WHERE email = ?`;
    var sql1=`SELECT address FROM users where email = ?`;
     pool.query(sql,[jsonobj.email],function(err,result){
 
        if(err){
            throw err;
        }
        else{   
            
            pool.query(sql1,[jsonobj.email],function(err,result){
 
                if(err){
                    throw err;
                }
                else{    
                    res.status(200).json({
                        result
                    });
                }
         
             })
           
        }
 
     })
}


