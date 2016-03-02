var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection  = require('express-myconnection');

connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password : '123',
     port : 3306, //port mysql
     database:'fametro',
     multipleStatements : true
   });
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Calcular IMC' });
});

router.get('/lista', function(req, res, next){
	res.render('lista', {})
});

router.get('/calcular', function(req, res, next){
	res.render('calcular', {})
});

router.list = function(req,res){
	connection.query("select * from dados;", function(err, result){
		if(err){
			console.error(err);
			return;
		}
		res.json(result);
	});
};

router.salvar = function(req, res){

	var valores = {
		nome: req.body.nome,
		peso: req.body.peso,
		altura: req.body.altura,
		imc: req.body.imc,
		status: req.body.status
	};

	connection.query("INSERT INTO dados SET ?", valores, function(err, result){
		if(err){
			console.error(err);
			return;
		}
		res.json(result);
	});
};

module.exports = router;
