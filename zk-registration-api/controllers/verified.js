const pool = require("../database");

module.exports.verified = async function(req,res){
     var body = req.body;
     var json_=JSON.stringify(body);
     var jsonobj =(JSON.parse(json_));
     console.log(jsonobj.name)

   
    var sql=`SELECT id, name, email, address FROM users WHERE isVerified = '1'`;
     pool.query(sql,[],function(err,result){
        
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
