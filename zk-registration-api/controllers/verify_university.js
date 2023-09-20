const pool = require("../database");

module.exports.university = async function(req,res){
     var body = req.body;
     var json_=JSON.stringify(body);
     var jsonobj =(JSON.parse(json_));
   
     var sql=`SELECT * FROM verify_university WHERE usn=?`;
     pool.query(sql,[jsonobj.usn],function(err,result){
        
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