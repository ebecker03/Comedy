const pool = require("../connections").pool;
const bcrypt = require("bcrypt");
const saltRounds = 10;

function create(req, res){
    pool.query("SELECT * FROM users WHERE username = ?",
    [req.body.username], (err, queryReturn)=>{
        if(queryReturn[0]){
            return res.send("Username Already Exists");
        }
        let password = bcrypt.hashSync(req.body.password, saltRounds);
        let username = req.body.username;
        let email = req.body.email;

        pool.query("INSERT INTO users (`username`, `email`, `password`) VALUES (?,?,?)",
        [username, email, password], (err, result)=>{
            if(!err){
                return res.send("Signed Up!");
            }
            return res.send("Something Went Wrong");
        })
    })
}