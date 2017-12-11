var express = require('express');
var router = express.Router();
var path = require('path');
// var mongojs = require('mongodb');
// var db = mongojs('mongodb://animi:database@ds133796.mlab.com:33796/animation');

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
/* GET home page. */

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/genre', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'genre.html'));
});

router.get('/animation', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'animation.html'));
});

router.get('/character', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'character.html'));
});

router.get('/naruto', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'naruto.html'));
});

router.get('/onepiece', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'onepiece.html'));
});

router.get('/dragonball', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'dragonball.html'));
});


router.get('/showall', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  var query = 'SELECT * from animation';
  //var email = req.params.email;
  //if (email != 'undefined') query = query + ' where login ="' + email + '"' ;
  // console.log(query);
  console.log('===============test controller==============');
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

  
  // Q3 from milestone 3
   // var query = "SELECT * "; 
   //  query += "FROM animation a, animation_genre ag, genre g"
   //  query += " WHERE a.anime_id = ag.anime_id AND ag.genre_label = g.genre_label"
   //  //query += " GROUP BY g.genre"
   //  query += " ORDER BY a.score DESC LIMIT 10"
  

  var query = 'SELECT DISTINCT * ';
  query += "FROM animation a, animation_genre ag, genre g"
  query += " WHERE a.anime_id = ag.anime_id AND ag.genre_label = g.genre_label"
  query += " ORDER BY a.score"
  // query += " GROUP BY g.genre"
  // query += " ORDER BY AVG(a.score) DESC"


  //var query = "SELECT * FROM animation LIMIT 5";

  // var query = "SELECT * FROM user LIMIT 10"
  console.log(query);
  console.log('test!!!!!!!!!!!!!!!!!!!!!!!!!!')

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
      // return callback(err, null);
    else {
        res.json(rows);
        //return callback(null, rows);
    }  
    });
});



router.get('/Top50', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  var query = 'SELECT * from animation Limit 5';

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

router.get('/data/:animation', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  var query = 'SELECT * from animation';
  var animation = req.params.animation;
  // console.log(email)
  if (animation != 'undefined') query = query + ' where name ="' + animation + '"' ;
  console.log(query);
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});


router.get('/insert/:values', function(req,res) {
 console.log("test?????????")

 var value = req.params.values.split('&');
 var query = 'INSERT INTO NewUserReview(name,score) VALUES("'+value[0]+'","'+value[1]+'")'
 console.log(query)

    //console.log('INSERT INTO Person(login,name,sex,relationshipStatus,birthyear) VALUES("'+value[0]+'","'+value[1]+'","'+value[2]+'","'+value[3]+'","'+value[4]+'")');
    connection.query(query ,function (err, rows, fields) {
        
        if (err) throw err;

    });
});


router.get('/showreview', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  var query = 'SELECT name, score from NewUserReview';

  console.log(query);
  console.log('test!!!!!!!!!!!!!!!!!!!!!!!!!!')

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});



router.get('/allchars', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  // var query = 'db.character.find()';
  // console.log(query);
  // console.log('test!!!!!!!!!!!!!!!!!!!!!!!!!!')

  MongoClient.connect('mongodb://animi:database@ds133796.mlab.com:33796/animation', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
        query = {score:-1}
        db.collection("character").find().sort(query).limit(10).toArray(function(err1,result){
          if(err1) throw err1;
          // console.log(result); 
          res.json(result);
        });
    }
    db.close();
});

});


router.get('/actionchars', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  // var query = 'db.character.find()';
  // console.log(query);
  // console.log('test!!!!!!!!!!!!!!!!!!!!!!!!!!')

  MongoClient.connect('mongodb://animi:database@ds133796.mlab.com:33796/animation', function (err, db) {
    if (err) {
        throw err;
    } else {
        //console.log("successfully connected to the database");
        var query1 = {genre: {$in: ["Action"]}};
        var query2 = {score: -1}
        db.collection("character").find(query1).sort(query2).limit(10).toArray(function(err1,result){
          if(err1) throw err1;
          // console.log(result); 
          res.json(result);
        });
    }
    db.close();
});

});


router.get('/advchars', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  // var query = 'db.character.find()';
  // console.log(query);
  // console.log('test!!!!!!!!!!!!!!!!!!!!!!!!!!')

  MongoClient.connect('mongodb://animi:database@ds133796.mlab.com:33796/animation', function (err, db) {
    if (err) {
        throw err;
    } else {
        //console.log("successfully connected to the database");
        var query1 = {genre: {$in: ["Adventure"]}};
        var query2 = {score: -1}
        db.collection("character").find(query1).sort(query2).limit(10).toArray(function(err1,result){
          if(err1) throw err1;
          // console.log(result); 
          res.json(result);
        });
    }
    db.close();
});

});


router.get('/dramachars', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  // var query = 'db.character.find()';
  // console.log(query);
  // console.log('test!!!!!!!!!!!!!!!!!!!!!!!!!!')

  MongoClient.connect('mongodb://animi:database@ds133796.mlab.com:33796/animation', function (err, db) {
    if (err) {
        throw err;
    } else {
        //console.log("successfully connected to the database");
        var query1 = {genre: {$in: ["Drama"]}};
        var query2 = {score: -1}
        db.collection("character").find(query1).sort(query2).limit(10).toArray(function(err1,result){
          if(err1) throw err1;
          // console.log(result); 
          res.json(result);
        });
    }
    db.close();
});

});


router.get('/romancechars', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  // var query = 'db.character.find()';
  // console.log(query);
  // console.log('test!!!!!!!!!!!!!!!!!!!!!!!!!!')

  MongoClient.connect('mongodb://animi:database@ds133796.mlab.com:33796/animation', function (err, db) {
    if (err) {
        throw err;
    } else {
        //console.log("successfully connected to the database");
        var query1 = {genre: {$in: ["Romance"]}};
        var query2 = {score: -1}
        db.collection("character").find(query1).sort(query2).limit(10).toArray(function(err1,result){
          if(err1) throw err1;
          // console.log(result); 
          res.json(result);
        });
    }
    db.close();
});

});

router.get('/comedychars', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  // var query = 'db.character.find()';
  // console.log(query);
  // console.log('test!!!!!!!!!!!!!!!!!!!!!!!!!!')

  MongoClient.connect('mongodb://animi:database@ds133796.mlab.com:33796/animation', function (err, db) {
    if (err) {
        throw err;
    } else {
        //console.log("successfully connected to the database");
        var query1 = {genre: {$in: ["Comedy"]}};
        var query2 = {score: -1}
        db.collection("character").find(query1).sort(query2).limit(10).toArray(function(err1,result){
          if(err1) throw err1;
          // console.log(result); 
          res.json(result);
        });
    }
    db.close();
});

});


router.get('/character/:anime', function(req,res){
  var anime = req.params.anime;
  var query = {};
  if(anime!='undefined'){
    query = {animation: anime};
  }

  console.log(query);
  MongoClient.connect('mongodb://animi:database@ds133796.mlab.com:33796/animation', function (err, db) {
    if (err) {
        throw err;
    } else {
        //console.log("successfully connected to the database");
        var query2 = {_id:0, name:1, url:1};
        db.collection("character").find(query, query2).toArray(function(err1,result){
          if(err1) throw err1;
          // console.log(result); 
          res.json(result);
        });
    }
    db.close();
});




});


router.get('/character/another/:genrescore', function(req,res){
  var genrescore = req.params.genrescore.split(' ');
  var query = {};
  console.log(genrescore[0]);

  if(genrescore!='undefined') query = {genre: {$in: [genrescore[0]]}, score: {$gte: parseFloat(genrescore[1])}};

  console.log(query);
  MongoClient.connect('mongodb://animi:database@ds133796.mlab.com:33796/animation', function (err, db) {
    if (err) {
        throw err;
    } else {
        //console.log("successfully connected to the database");
        var query2 = {_id:0, name:1, url:1};
        db.collection("character").find(query, query2).limit(5).toArray(function(err1,result){
          if(err1) throw err1;
          // console.log(result); 
          res.json(result);
        });
    }
    db.close();
});

});

router.get('/character/another_query/:charname', function(req,res){
  var charname = req.params.charname;
  var query = {};

  if(charname!='undefined') query = {name: charname};

  console.log(query);
  MongoClient.connect('mongodb://animi:database@ds133796.mlab.com:33796/animation', function (err, db) {
    if (err) {
        throw err;
    } else {
        //console.log("successfully connected to the database");
        var query2 = {_id:0, name:1, animation:1, score:1, genre:1, url:1};
        db.collection("character").find(query, query2).limit(5).toArray(function(err1,result){
          if(err1) throw err1;
          // console.log(result); 
          res.json(result);
        });
    }
    db.close();
});

});



router.get('/genreshowall', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  var query = 'SELECT g.genre, AVG(a.score) AS score ';
  query += "FROM animation a, animation_genre ag, genre g"
  query += " WHERE a.anime_id = ag.anime_id AND ag.genre_label = g.genre_label"
  query += " GROUP BY g.genre"
  query += " ORDER BY AVG(a.score) DESC"
  console.log(query)
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



router.get('/genreTop5', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");


  
  var query = 'SELECT g.genre, AVG(a.score) AS score ';
  query += "FROM animation a, animation_genre ag, genre g"
  query += " WHERE a.anime_id = ag.anime_id AND ag.genre_label = g.genre_label"
  query += " GROUP BY g.genre"
  query += " ORDER BY AVG(a.score) DESC LIMIT 5"



  console.log(query)
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



router.get('/genreTop20', function(req,res) {
  // use console.log() as print() in case you want to debug, example below:
  // console.log("inside person email");
  // var query = 'SELECT g.genre, AVG(a.score) AS score ';
  // query += "FROM animation a, animation_genre ag, genre g"
  // query += " WHERE a.anime_id = ag.anime_id AND ag.genre_label = g.genre_label"
  // query += " GROUP BY g.genre"
  // query += " ORDER BY AVG(a.score) DESC LIMIT 20"

  var query = 'SELECT g.genre, AVG(a.score) AS score ';
  query += "FROM animation a, animation_genre ag, genre g"
  query += " WHERE a.anime_id = ag.anime_id AND ag.genre_label = g.genre_label"
  query += " GROUP BY g.genre"
  query += " ORDER BY AVG(a.score) DESC LIMIT 5"



  console.log(query)
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





// router.get('/insert/:values', function(req,res) {
//  var value = req.params.values.split('&');
//     //console.log('INSERT INTO Person(login,name,sex,relationshipStatus,birthyear) VALUES("'+value[0]+'","'+value[1]+'","'+value[2]+'","'+value[3]+'","'+value[4]+'")');
//     connection.query('INSERT INTO Person(login,name,sex,relationshipStatus,birthyear) VALUES("'+value[0]+'","'+value[1]+'","'+value[2]+'","'+value[3]+'","'+value[4]+'")' ,function (err, rows, fields) {
//         if (err) throw err;

//     });
// });


module.exports = router;


