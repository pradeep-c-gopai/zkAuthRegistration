const pool = require("../database");
 
module.exports.getall = async function(req,res){
     var body = req.body;
     var json_=JSON.stringify(body);
     var jsonobj =(JSON.parse(json_));
     
 
 
    var sql=`SELECT * FROM users`;
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
