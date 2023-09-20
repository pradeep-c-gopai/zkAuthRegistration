const pool = require("../database");

module.exports.walletaddress = async function(req,res){
     var body = req.body;
     var json_=JSON.stringify(body);
     var jsonobj =(JSON.parse(json_));
     console.log(jsonobj.name)

   
    var sql=`SELECT address1 FROM users WHERE email = ?`;
     pool.query(sql,[jsonobj.email],function(err,result){
        
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