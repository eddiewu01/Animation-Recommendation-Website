var express = require('express');
var router = express.Router();
var path = require('path');

// Connect string to MySQL

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'fling.seas.upenn.edu',
//   user     : 'zlz',
//   password : 'owencis550',
//   database : 'zlz'
// });


var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'guobiao2.c8cv6ha3bzfw.us-west-2.rds.amazonaws.com',
  user     : 'guobiao',
  password : '2G5K6D435q',
  database : 'group9_550'
  // port: "3306"
});



var MongoClient = require('mongodb').MongoClient, format = require('util').format;
MongoClient.connect('mongodb://animi:database@ds133796.mlab.com:33796/animation', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
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

router.get('/showall', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  var query = 'SELECT * from animation LIMIT 10';
  //var email = req.params.email;
  //if (email != 'undefined') query = query + ' where login ="' + email + '"' ;
  // console.log(query);
  // console.log('test controller');
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});


router.get('/Top10', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  // var query = 'SELECT * from Person Limit 10';
  //var query = 'SELECT * from animation limit 10';

  /*
  // Q3 from milestone 3
  var query = "SELECT DISTINCT name " 
  query += "FROM animation a, animation_genre ag, genre g"
  query += " WHERE a.anime_id = ag.anime_id AND ag.genre_label = g.genre_label"
  query += " ORDER BY a.score DESC LIMIT 10"
  */

  //var query = "SELECT * FROM animation LIMIT 5";

  var query = "SELECT * FROM user LIMIT 10"
  console.log(query);
  // console.log('test!!!!!!!!!!!!!!!!!!!!!!!!!!')

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    	//return callback(err, null);
    else {
        res.json(rows);
        //return callback(null, rows);
    }  
    });
});

router.get('/Top50', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  var query = 'SELECT * from Person Limit 3';

  console.log(query);
  // console.log('test!!!!!!!!!!!!!!!!!!!!!!!!!!')

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});

router.get('/Empty', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  var query = 'SELECT * FROM user WHERE 1 = 0';

  console.log(query);
  // console.log('test!!!!!!!!!!!!!!!!!!!!!!!!!!')

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});



router.get('/insert/:values', function(req,res) {
 var value = req.params.values.split('&');
    //console.log('INSERT INTO Person(login,name,sex,relationshipStatus,birthyear) VALUES("'+value[0]+'","'+value[1]+'","'+value[2]+'","'+value[3]+'","'+value[4]+'")');
    connection.query('INSERT INTO Person(login,name,sex,relationshipStatus,birthyear) VALUES("'+value[0]+'","'+value[1]+'","'+value[2]+'","'+value[3]+'","'+value[4]+'")' ,function (err, rows, fields) {
        if (err) throw err;

    });
});


module.exports = router;


