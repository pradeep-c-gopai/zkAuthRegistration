const pool = require("../database");
const crypto = require('crypto');


module.exports.auth = async function(req, res) {
    const ethereumAddress = req.body.ethereumAddress;
    
    // Check if user already exists in the database
    const selectSql = `SELECT * FROM users WHERE ethereum_address = ?`;
    pool.query(selectSql, [ethereumAddress], (err, result) => {
        if (err) {
            res.status(500).send('Error selecting user from database');
            return;
        }

        if (result.length > 0) {
            // User already exists, assign same auth token and user ID
            const userId = result[0].id;
            const authToken = result[0].auth_token;

            res.status(200).json({
                userId: userId,
                authToken: authToken
            });
        } else {
            // User does not exist, generate new auth token and insert into database
            const authToken = crypto.randomBytes(16).toString('hex');

            const insertSql = `INSERT INTO users (ethereum_address, auth_token) VALUES (?, ?)`;
            pool.query(insertSql, [ethereumAddress, authToken], (err, result) => {
                if (err) {
                    res.status(500).send('Error inserting user into database');
                    return;
                }

                const userId = result.insertId;

                res.status(200).json({
                    userId: userId,
                    authToken: authToken
                });
            });
        }
    });
}
