const jwt = require('jsonwebtoken')
const {JWT_KEY} = require('../keys')
const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'vikram'
  });
module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    // Bearer token
    if(!authorization){
        return res.status(401).json({error:"You must be loged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,JWT_KEY,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"You must be loged in"})
        }
        const {_id} = payload
        var sql = 'SELECT `ID`, `email`,`Password` FROM `admin` WHERE ID= ' + _id;
        con.query(sql, function (err, result) {
            req.user = result
        })
        next()
    })
}