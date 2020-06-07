var express = require('express');
var router = express.Router();
var mysql_dbc = require('./db_conf')();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);
//var mysql = require('mysql');
//var querystring = require('querystring');

router.get('/', function(req, res){
        console.log('index');
	var stmt = 'select name, context, route from board_code';
        connection.query(stmt, function (err, result) {
                if(!err) {
                        res.render('index', {result: result});
                } else {
                        console.log(err);
                        console.log(result);
                }
        });
});

router.get('/start', function(req, res) {
        console.log('start');
        var stmt = 'select a.name, a.context, b.title, b.content from board_code as a inner join board as b on a.code = b.boardcode where a.code = 1 order by orderby';
        connection.query(stmt, function (err, result) {
                if(!err) {
                        res.render('detail', {result: result});
                } else {
                        console.log(err);
                        console.log(result);
                }
        });
});

router.get('/challenge', function(req, res) {
        console.log('challenge');
        var stmt = 'select a.name, a.context, b.title, b.content from board_code as a inner join board as b on a.code = b.boardcode where a.code = 2 order by orderby';
        connection.query(stmt, function (err, result) {
                if(!err) {
                        res.render('detail', {result: result});
                } else {
                        console.log(err);
                        console.log(result);
                }
        });
});

router.get('/duel', function(req, res) {
        console.log('duel');
        var stmt = 'select a.name, a.context, b.title, b.content from board_code as a inner join board as b on a.code = b.boardcode where a.code = 3 order by orderby';
        connection.query(stmt, function (err, result) {
                if(!err) {
                        res.render('detail', {result: result});
                } else {
                        console.log(err);
                        console.log(result);
                }
        });
});

router.get('/boss', function(req, res) {
        console.log('boss');
        var stmt = 'select a.name, a.context, b.title, b.content from board_code as a inner join board as b on a.code = b.boardcode where a.code = 4 order by orderby';
        connection.query(stmt, function (err, result) {
                if(!err) {
                        res.render('detail', {result: result});
                } else {
                        console.log(err);
                        console.log(result);
                }
        });
});

router.get('/event', function(req, res) {
        console.log('event');
        var stmt = 'select a.name, a.context, b.title, b.content from board_code as a inner join board as b on a.code = b.boardcode where a.code = 5 order by orderby';
        connection.query(stmt, function (err, result) {
                if(!err) {
                        res.render('detail', {result: result});
                } else {
                        console.log(err);
                        console.log(result);
                }
        });
});

router.get('/etc', function(req, res) {
        console.log('event');
        var stmt = 'select a.name, a.context, b.title, b.content from board_code as a inner join board as b on a.code = b.boardcode where a.code = 6 order by orderby';
        connection.query(stmt, function (err, result) {
                if(!err) {
                        res.render('detail', {result: result});
                } else {
                        console.log(err);
                        console.log(result);
                }
        });
});

router.post('/menu', function(req, res){
	var stmt = 'select name, context, route from board_code';
        connection.query(stmt, function (err, result) {
                if(!err) {
                        res.send({menu: result});
                } else {
                        console.log(err);
                        console.log(result);
                }
        });
});

router.get('/adminlogin', function(req, res) {
        res.render('login');
});

module.exports = router;