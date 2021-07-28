const express = require('express')
const router = express.Router()
var bodyParser = require("body-parser");
const app = express();
var cors = require('cors')
const mysql = require('mysql');
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../keys')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

router.post('/login', (req, res) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'vikram'
  });
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(422).json({ error: "Please add all the fields" })
  }
  con.connect(function (err) {
    if (err) throw err;
    var sql = 'SELECT `ID`, `email`,`Password` FROM `admin` WHERE email=' + mysql.escape(email);
    con.query(sql, function (err, result) {
      if (err) {
        return res.status(422).json({ error: "Admin not found" });
      }
      if (result[0] == null) {
        return res.status(422).json({ error: "Admin not found" });
      }
      if (result[0].Password == password) {
        const token = jwt.sign({ _id: result[0].ID }, JWT_KEY)
        res.json({ token, result, message: "Succesfull login" })
      }
      else {
        return res.status(422).json({ error: "Invalid email or password" });
      }
    });
  });
})

router.get('/candidateinfo', (req, res) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'vikram'
  });
  con.connect(function (err) {
    if (err) throw err;
    var sql = 'SELECT * FROM `candidate_info` WHERE selected = 0';
    con.query(sql, function (err, result) {
      if (err) throw (err)
      if (result == null) {
        return res.status(422).json({ error: "No candidates have registered" });
      }
      else {
        res.send(result)
      }
    })
  })
})
router.get('/selectedcandidates', (req, res) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'vikram'
  });
  con.connect(function (err) {
    if (err) throw err;
    var sql = 'SELECT c.id, c.email, phone, jobid, c.name as candidateName, m.name as mentorName ' + 
              'FROM candidate_info c, mentors m ' + 
              'where c.mentor = m.Id and selected = 1'; 
    con.query(sql, function (err, result) {
      if (err) throw (err)
      if (result == null) {
        return res.status(422).json({ error: "No candidates Available" });
      }
      else {
        res.send(result)
      }
    })
  })
})

router.get('/mentoralotment', (req, res) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'vikram'
  });
  con.connect(function (err) {
    if (err) throw err;
    var sql = 'SELECT * FROM candidate_info where selected = 1 && mentor IS NULL';
    con.query(sql,1, function (err, result) {
      if (err) throw (err)
      if (result == null) {
        return res.status(422).json({ error: "No new candidates have registered" });
      }
      else {
        res.send(result)
      }
    })
  })
})
router.get('/getmentors', (req, res) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'vikram'
  });
  con.connect(function (err) {
    if (err) throw err;
    var sql = 'SELECT * FROM mentors';
    con.query(sql,function (err, result) {
      if (err) throw (err)
      if (result == null) {
        return res.status(422).json({ error: "No new candidates have registered" });
      }
      else {
        res.send(result)
      }
    })
  })
})
router.get('/allocatementor/(:mid)/(:cid)', (req, res) => {
  var mid = req.params.mid;
  var cid = req.params.cid;
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'vikram'
  });
  let udata = [mid, cid];
  con.connect(function (err) {
    if (err) throw err;
    var query = con.query("UPDATE candidate_info SET mentor =? WHERE ID=?",udata,function (err, result) {
      if (err) throw (err)
      if (result == null) {
        return res.status(422).json({ error: "mentor not alloted to the candidate" });
      }
      else {
        return res.status(200).json({ message: "Mentor alloted to the candidate" });
      }
    })
  })
})

router.post('/register', (req, res) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'vikram'
  });
  const { email, college, name, age, phone, jobid } = req.body
  if (!email || !college || !name || !age || !phone || !jobid) {
    return res.status(422).json({ error: "Please add all the fields" })
  }
  var data = {
    name: name,
    email: email,
    phone: phone,
    age: age,
    jobID: jobid,
    college: college
  };
  con.connect(function (err) {
    if (err) throw err;
    con.query('INSERT INTO candidate_info SET?', data, function (err, result) {
      if (err) throw err;
      else {
        return res.json({ message: "Succesfully registered for internship" });
      }
    });
  });
})

router.get("/delete/(:ID)", function (req, res) {
  var did = req.params.ID;
  var mysql = require("mysql");
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "vikram",
  });
  connection.connect();
  var sql = "DELETE FROM candidate_info WHERE ID=?"
  connection.query(sql, did, function (err, result) {
    if (err) throw err;
    else {
      return res.json({ message: "Succesfully deleted" });
    }
  });
  connection.end();
});

router.get("/edit/(:ID)/(:sel)", function (req, res) {
  var id = req.params.ID;
  var sel = req.params.sel;
  if (sel == 0) {
    sel = 1;
  } else {
    sel = 0;
  }
  let udata = [sel, id];
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'vikram'
  });
  con.connect(function (err) {
    if (err) throw err;
    var sql = 'UPDATE candidate_info SET selected=? WHERE ID=?';
    con.query(sql,udata,function (err, result) {
      if (err) {
        throw (err)
      }
      if (result == null) {
        return res.status(422).json({ error: "something error has occured" });
      }
      else {
        return res.status(200).json({ message: "Succesfully updated"});
      }
      
    })
  })

});

module.exports = router