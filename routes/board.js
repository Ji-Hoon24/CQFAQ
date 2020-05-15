// var express = require('express');
// var router = express.Router();
// var mysql_dbc = require('./db_conf')();
// var connection = mysql_dbc.init();
// mysql_dbc.test_open(connection);
// var mysql = require('mysql');
// var querystring = require('querystring');

// router.get('/write', function(req, res){
// 	console.log('write');
// 	res.render('board/write');
// });

// router.post('/save', function(req, res){
//     console.log('save');
//     var title = '';
//     var content = '';
//     req.on('data', function(chunk) {
// 		var data = querystring.parse(chunk.toString());
//         title = data.title;
//         content = data.content;
//         var stmt = 'insert into board (title, content, create_date) values (' + mysql.escape(title) + ', ' + mysql.escape(content) + ', sysdate())';
// 		connection.query(stmt, function (err, result) {
// 			if(err) {
//                 console.log(err);
//                 console.log(result);
//             } else {
//                 res.redirect('write');
//             }
// 		});
//     });
// })

// router.get('/list', function(req, res) {
//     console.log('list');
//     var stmt = 'select bno, title, date_format(create_date, "%y/%c/%e") as cDate, view_cnt from board order by bno desc';
// 		connection.query(stmt, function (err, result) {
//             if(!err) {
//                 //console.log(result);
//                 res.render('board/list', {result: result});
//             } else {
//                 console.log(err);
//                 console.log(result);
//             }
//         });
// });

// module.exports = router;