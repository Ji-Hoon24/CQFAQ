var express = require('express');
var router = express.Router();
var mysql_dbc = require('./db_conf')();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);
var crypto = require('crypto');
var mysql = require('mysql');
var querystring = require('querystring');
var url = require('url');

router.get('/boardcode', function(req, res) {
    console.log('boardcode');
	var stmt = 'select * from board_code';
        connection.query(stmt, function (err, result) {
                if(!err) {
                        res.render('boardcode', {result: result});
                } else {
                        console.log(err);
                        console.log(result);
                }
        });
});

router.get('/codeDetail', function(req, res) {
	console.log('codeDetail');
	var queryData = url.parse(req.url, true).query.bno;
	if(queryData > 0) {
		var stmt = 'select * from board_code where bno = ' + mysql.escape(queryData);
        connection.query(stmt, function (err, result) {
                if(!err) {
                        res.render('codeDetail', {result: result});
                } else {
                        console.log(err);
                        console.log(result);
                }
        });
	} else {
		res.render('codeDetail', {result:null});
	}
});

router.post('/codeSave', function(req, res) {
	console.log('save');
	var bno = '';
	var code = '';
    var name = '';
	var context = '';
	var route = '';

    req.on('data', function(chunk) {
		var data = querystring.parse(chunk.toString());
        bno = data.bno;
		code = data.code;
		name = data.name;
		context = data.context;
		route = data.route;
		var stmt = 'update board_code set code = '+ mysql.escape(code) + ', name = ' + mysql.escape(name) + ', context = ' + mysql.escape(context) + ', route = ' + mysql.escape(route) + ' where bno = ' + mysql.escape(bno);
		connection.query(stmt, function (err, result) {
			if(err) {
				res.send({result : 'Fail'});
			} else {
				res.send({result : 'Success'});
			}
		});
    });
});

router.post('/codeAdd', function(req, res) {
	console.log('add');
	var code = '';
    var name = '';
	var context = '';
	var route = '';

    req.on('data', function(chunk) {
		var data = querystring.parse(chunk.toString());
		code = data.code;
		name = data.name;
		context = data.context;
		route = data.route;
		var stmt = 'insert into board_code(code, name, context, route) values(' + mysql.escape(code) + ', ' + mysql.escape(name) + ', ' + mysql.escape(context) + ', ' + mysql.escape(route) + ')';
		connection.query(stmt, function (err, result) {
			if(err) {
				console.log(err);
				res.send({result : 'Fail'});
			} else {
				res.send({result : 'Success'});
			}
		});
    });
});

router.post('/codeDelete', function(req, res) {
	console.log('delete');
	var bno = '';

    req.on('data', function(chunk) {
		var data = querystring.parse(chunk.toString());
		bno = data.bno;
		var stmt = 'delete from board_code where bno = ' + bno;
		connection.query(stmt, function (err, result) {
			if(err) {
				console.log(err);
				res.send({result : 'Fail'});
			} else {
				res.send({result : 'Success'});
			}
		});
    });
});

router.get('/board', function(req, res) {
    console.log('board');
	var queryData = url.parse(req.url, true).query.code;
	if(queryData > 0) {
		var stmt = 'select * from board where boardcode = ' + mysql.escape(queryData);
	} else {
		var stmt = 'select * from board';
	}
        connection.query(stmt, function (err, result) {
                if(!err) {
                        res.render('board', {result: result});
                } else {
                        console.log(err);
                        console.log(result);
                }
        });
});

router.get('/boardDetail', function(req, res) {
	console.log('boardDetail');
	var queryData = url.parse(req.url, true).query.bno;
	if(queryData > 0) {
		var stmt = 'select * from board where bno = ' + mysql.escape(queryData);
        connection.query(stmt, function (err, result) {
                if(!err) {
                        res.render('boardDetail', {result: result});
                } else {
                        console.log(err);
                        console.log(result);
                }
        });
	} else {
		res.render('boardDetail', {result:null});
	}
});

router.post('/boardSave', function(req, res) {
	console.log('save');
	var bno = '';
	var code = '';
    var name = '';
	var context = '';
	var route = '';

    req.on('data', function(chunk) {
		var data = querystring.parse(chunk.toString());
        bno = data.bno;
		code = data.code;
		name = data.name;
		context = data.context;
		route = data.route;
		var stmt = 'update board set boardcode = '+ mysql.escape(code) + ', title = ' + mysql.escape(name) + ', content = ' + mysql.escape(context) + ', orderby = ' + mysql.escape(route) + ' where bno = ' + mysql.escape(bno);
		connection.query(stmt, function (err, result) {
			if(err) {
				console.log(err);
				res.send({result : 'Fail'});
			} else {
				res.send({result : 'Success'});
			}
		});
    });
});

router.post('/boardAdd', function(req, res) {
	console.log('add');
	var code = '';
    var name = '';
	var context = '';
	var route = '';

    req.on('data', function(chunk) {
		var data = querystring.parse(chunk.toString());
		code = data.code;
		name = data.name;
		context = data.context;
		route = data.route;
		var stmt = 'insert into board(boardcode, title, content, orderby) values(' + mysql.escape(code) + ', ' + mysql.escape(name) + ', ' + mysql.escape(context) + ', ' + mysql.escape(route) + ')';
		connection.query(stmt, function (err, result) {
			if(err) {
				res.send({result : 'Fail'});
			} else {
				res.send({result : 'Success'});
			}
		});
    });
});

router.post('/boardDelete', function(req, res) {
	console.log('delete');
	var bno = '';

    req.on('data', function(chunk) {
		var data = querystring.parse(chunk.toString());
		bno = data.bno;
		var stmt = 'delete from board where bno = ' + bno;
		connection.query(stmt, function (err, result) {
			if(err) {
				console.log(err);
				res.send({result : 'Fail'});
			} else {
				res.send({result : 'Success'});
			}
		});
    });
});

module.exports = router;