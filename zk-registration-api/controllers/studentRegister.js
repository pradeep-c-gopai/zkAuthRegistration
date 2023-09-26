const pool = require("../database");

module.exports.studentRegister = async function(req,res){
     var body = req.body;
     var json_=JSON.stringify(body);
     var jsonobj =(JSON.parse(json_));
    //  console.log(jsonobj.name)
    //  console.log('name ', jsonobj);

   
     var sql = `SELECT * FROM users WHERE address = ?`;
     pool.query(sql, [jsonobj.address], function(err, result) {
       if (err) {
         throw err;
       }
       else if (result.length > 0) {
         res.status(409).json({
           error: 'already registered'
         });
       }
       else {
         sql = `INSERT INTO users (name, email, isVerified, address) VALUES (?,?,?,?);`;
         pool.query(sql, [jsonobj.name, jsonobj.email, 0, jsonobj.address], function(err, result) {
           if (err) {
             throw err;
           }
           else {
             res.status(200).json({
               Success: `Data of ${jsonobj} recorded in db successfully`
             });
           }
         });
       }
     });
    }     
