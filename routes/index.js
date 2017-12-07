var express = require('express');
var router = express.Router();
var path = require('path');

// Connect string to MySQL
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'guobiao2.c8cv6ha3bzfw.us-west-2.rds.amazonaws.com',
  user     : 'guobiao',
  password : '2G5K6D435q',
  database : 'guobiao2'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/reference', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'reference.html'));
});

router.get('/insert', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'insert.html'));
});

/*
router.get('/showfamily', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'showfamily.html'));
});
*/

router.get('/data/:email', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  //console.log("inside person email");
  var query = 'SELECT p.login, p.name, p.sex, p.relationshipStatus, p.birthyear, COUNT(f.login) AS number_of_friends from (Person p LEFT JOIN Friends f ON p.login = f.login) GROUP BY p.login';
  // you may change the query during implementation
  var email = req.params.email;
  if (email != 'undefined') query = 'SELECT p.login, p.name, p.sex, p.relationshipStatus, p.birthyear, COUNT(f.login) AS number_of_friends from (Person p LEFT JOIN Friends f ON p.login = f.login)' + ' where p.login ="' + email +'"' + ' group by p.login' ;
  console.log(query);
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        //console.log(rows);
        res.json(rows);
    }  
    });
});

// ----Your implemention of route handler for "Insert a new record" should go here-----
router.get('/insert/:login/:name/:sex/:relationshipStatus/:birthyear', function(req, res,next) {
  var login1 = req.params.login;
  var name1 = req.params.name;
  var sex1 = req.params.sex;
  var relationshipStatus1 = req.params.relationshipStatus;
  var birthyear1 = req.params.birthyear;
  console.log(login1);
  //console.log(login);
  var query = 'INSERT INTO Person VALUES(' + '"' + login1 + '"' +', ' + '"' + name1 + '"' + ', ' + '"' + sex1 + '"' + ', ' + '"' + relationshipStatus1 + '"' + ', ' + '"' + birthyear1 + '"' + ')';
  console.log(query);
  connection.query(query, function(err, rows, fields) {
    if(err) console.log(err);
    else{

    }
  });
});


module.exports = router;