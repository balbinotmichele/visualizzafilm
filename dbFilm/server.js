var express = require('express');
var mysql = require('mysql');
const util = require('util');
var sConnection={host: 'localhost',port: 3306, user: 'root',password: 'root',database: 'dbfilm'};
var app = express();
app.use(express.static('.')); // Consente modalità "static"
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));

app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*'); //'http://localhost:8888');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.get("/listAttori",function(req,res){
	connection= mysql.createConnection(sConnection)	;
	connection.connect(function(err){
		if (!err){
			var sQuery="select * from attori;";	
			connection.query(sQuery,function(err,rows,fileds){
		      if (err) 
				res.sendStatus(500); //Internal Server Error
				else
				res.setHeader('Access-Control-Allow-Origin','*');
				res.json(rows); //resituisce tutti i records in formato json
				//console.log(rows)
			})
		}
	})
});

app.get("/listSale", function(req, res) {
	connection= mysql.createConnection(sConnection)	;
	connection.connect(function(err){
		if (!err){
			var sQuery="SELECT * FROM SALE;";	
			connection.query(sQuery,function(err,rows,fileds){
		      if (err) 
				res.sendStatus(500);
				else
				res.setHeader('Access-Control-Allow-Origin','*');
				res.json(rows);
			})
		}
	})
});

app.get("/listFilm", function(req, res) {
	/*connection= mysql.createConnection(sConnection)	;
	connection.connect(function(err){
		if (!err){
			var sQuery="SELECT * FROM FILM LIMIT ? OFFSET ?;";	
			var data=[];
			console.log(req.query.limit);
			console.log(req.query.offset);
			  data.push(parseInt(req.query.limit));
			  data.push(parseInt(req.query.offset));
			connection.query(sQuery, data, function(err,rows,fileds){
		      if (err) 
				res.sendStatus(500); 
				else
				res.setHeader('Access-Control-Allow-Origin','*');
				res.json(rows);
			})

	  };
	});*/
	connection.connect(function(err){
		if (!err){
			var sQuery="SELECT * FROM FILM;";	
			connection.query(sQuery,function(err,rows,fileds){
		      if (err) 
				res.sendStatus(500);
				else
				res.setHeader('Access-Control-Allow-Origin','*');
				res.json(rows);
			})
		}
	})
});

app.get("/getData",function(req,res){
	connection= mysql.createConnection(sConnection)	;
	connection.connect(function(err){
		if (!err){
			var sQuery="call dbfilm.getData(?,?,?, @nRows, @nPages); select @nRows as nRows, @nPages as nPages";	
			var data=[];
			data.push(req.query.tableName);
			data.push(req.query.pageIndex);
			data.push(req.query.pageSize);
			
			console.log(data);
	        
			connection.query(sQuery,data,function(err,rows,fileds){
		      if (err) 
				res.sendStatus(500); //Internal Server Error
				else
				//res.setHeader('Access-Control-Allow-Origin','*');
				res.json(rows); //resituisce tutti i records in formato json
				console.log(rows);
			})
		}
	})
})
  
app.delete('/delAttore', function(req, res) {
	console.log("delAttore");
	//res.setHeader('Access-Control-Allow-Origin','*');
	connection = mysql.createConnection(sConnection);
    connection.connect(function(err){ // callback
    if(!err) {
      var sQuery="delete from attori where CodAttore=?;";
      var data=[];
	 // console.log("del Attore:"+util.inspect(req, {showHidden: false, depth: null}));
      data.push(req.query.CodAttore);
	  console.log(req.query.CodAttore);
	  console.log(data[0]);
      connection.query(sQuery, data, function(err, rows, fields) {
				console.log("err");
				console.log(err);
				
        if (err) 
          res.sendStatus(500); //Internal Server Error
				else if (rows.affectedRows==0){
					console.log("affectedRows");

					res.sendStatus(401); //non ha trovato il cliente 
				}
        else   {
					console.log("Cancellato");
					res.status(200).send({status: 200, Message: "Del OK" });
					//res.sendStatus(200); // Attore cancellato con successo!
				}
      }); 
    } else {
      console.log("Error connecting database ... ");    
      res.sendStatus(500); //Internal Server Error
    }
  });
});

app.delete('/delFilm', function(req, res) {
	console.log("delFilm");
	connection = mysql.createConnection(sConnection);
    connection.connect(function(err){
    if(!err) {
      var sQuery="DELETE FROM film WHERE CodFilm = ?;";
      var data=[];
      data.push(req.query.CodFilm);
	  console.log(req.query.CodFilm);
	  console.log(data[0]);
      connection.query(sQuery, data, function(err, rows, fields) {
				console.log("err");
				console.log(err);
				
        if (err) 
          res.sendStatus(500);
				else if (rows.affectedRows==0){
					console.log("affectedRows");

					res.sendStatus(401);
				}
        else   {
					console.log("Cancellato");
					res.status(200).send({status: 200, Message: "Del OK" });
				}
      }); 
    } else {
      console.log("Error connecting database ... ");    
      res.sendStatus(500);
    }
  });
});

app.delete('/delSala', function(req, res) {
	console.log("delSala");
	connection = mysql.createConnection(sConnection);
    connection.connect(function(err){
    if(!err) {
      var sQuery="DELETE FROM sale WHERE CodSala = ?;";
      var data=[];
      data.push(req.query.CodFilm);
	  console.log(req.query.CodFilm);
	  console.log(data[0]);
      connection.query(sQuery, data, function(err, rows, fields) {
				console.log("err");
				console.log(err);
				
        if (err) 
          res.sendStatus(500);
				else if (rows.affectedRows==0){
					console.log("affectedRows");

					res.sendStatus(401);
				}
        else   {
					console.log("Cancellato");
					res.status(200).send({status: 200, Message: "Del OK" });
				}
      }); 
    } else {
      console.log("Error connecting database ... ");    
      res.sendStatus(500);
    }
  });
});

app.put('/ModAttore', function(req, res){
	console.log(req.body.Nome);
	//res.setHeader('Access-Control-Allow-Origin','*');
	connection = mysql.createConnection(sConnection);
	connection.connect(function(err){
    if(!err) {
		var sQuery="UPDATE Attori SET Nome = ?, AnnoNascita = ?, Nazionalita = ? WHERE CodAttore = ?;";
		var data = [];
		console.log(req.query.CodAttore);
		console.log(req.query.Nome);
		console.log(req.query.AnnoNascita);
		console.log(req.query.Nazionalita);
		data.push(req.query.Nome);
		data.push(req.query.AnnoNascita);
		data.push(req.query.Nazionalita);
		data.push(req.query.CodAttore);
		connection.query(sQuery, data, function(err, rows, fields) {
			if (err) 
			{	console.log(err);
				res.sendStatus(500); //Internal Server Error
			}
			else if (rows.affectedRows==0)
			{
				var sQuery2="INSERT INTO Attori(Nome, AnnoNascita, Nazionalita) VALUES(?,?,?)";
				connection.query(sQuery2, data, function(err, rows, fields) {
					if (err) 
					{
						console.log(err);
						res.sendStatus(500); //Internal Server Error
					}						
					else   
					//res.status(200).send({ status:200, Message: "Ins OK" });
					res.status(200).send({ 
						status:  200, 
						Message: "Ins OK",
						data: 	 req.query  
					});
					//	res.sendStatus(200)
				});
			}
			else   
			{
				//res.sendStatus(200)
				res.status(200).send({ 
						status:  200, 
						Message: "Mod OK",
						data:    req.query   
					});
			}
		  }); 
	} else {
      console.log("Error connecting database ... ");    
      res.sendStatus(500); //Internal Server Error
    }
  });
});

app.put('/ModFilm', function(req, res){
	console.log(req.body.Titolo);
	connection = mysql.createConnection(sConnection);
	connection.connect(function(err){
    if(!err) {
		var sQuery="UPDATE Film SET Titolo = ?, AnnoProduzione = ?, Nazionalita = ?, Regista = ?, Genere = ? WHERE CodFilm = ?;";
		var data = [];
		console.log(req.query.CodFilm);
		console.log(req.query.Titolo);
		console.log(req.query.AnnoProduzione);
		console.log(req.query.Nazionalita);
		console.log(req.query.Regista);
		console.log(req.query.Genere);
		data.push(req.query.Titolo);
		data.push(req.query.AnnoProduzione);
		data.push(req.query.Nazionalita);
		data.push(req.query.Regista);
		data.push(req.query.Genere);
		data.push(req.query.CodFilm);
		connection.query(sQuery, data, function(err, rows, fields) {
			if (err) 
			{	console.log(err);
				res.sendStatus(500); 
			}
			else if (rows.affectedRows==0)
			{
				var sQuery2="INSERT INTO Film(Titolo, AnnoProduzione, Nazionalita, Regista, Genere) VALUES(?,?,?,?,?)";
				connection.query(sQuery2, data, function(err, rows, fields) {
					if (err) 
					{
						console.log(err);
						res.sendStatus(500); 
					}						
					else   
					res.status(200).send({ 
						status:  200, 
						Message: "Ins OK",
						data: 	 req.query  
					});
				});
			}
			else   
			{
				res.status(200).send({ 
						status:  200, 
						Message: "Mod OK",
						data:    req.query   
					});
			}
		  }); 
	} else {
      console.log("Error connecting database ... ");    
      res.sendStatus(500);
    }
  });
});

app.put('/ModSala', function(req, res){
	console.log(req.body.Titolo);
	connection = mysql.createConnection(sConnection);
	connection.connect(function(err){
    if(!err) {
		var sQuery="UPDATE Sale SET Posti = ?, Nome = ?, Citta = ? WHERE CodSala = ?;";
		var data = [];
		console.log(req.query.CodSala);
		console.log(req.query.Posti);
		console.log(req.query.Nome);
		console.log(req.query.Citta);
		data.push(req.query.Posti);
		data.push(req.query.Nome);
		data.push(req.query.Citta);
		data.push(req.query.CodSala);
		connection.query(sQuery, data, function(err, rows, fields) {
			if (err) 
			{	console.log(err);
				res.sendStatus(500); 
			}
			else if (rows.affectedRows==0)
			{
				var sQuery2="INSERT INTO Sale(Posti, Nome, Citta) VALUES(?,?,?)";
				connection.query(sQuery2, data, function(err, rows, fields) {
					if (err) 
					{
						console.log(err);
						res.sendStatus(500); 
					}						
					else   
					res.status(200).send({ 
						status:  200, 
						Message: "Ins OK",
						data: 	 req.query  
					});
				});
			}
			else   
			{
				res.status(200).send({ 
						status:  200, 
						Message: "Mod OK",
						data:    req.query   
					});
			}
		  }); 
	} else {
      console.log("Error connecting database ... ");    
      res.sendStatus(500);
    }
  });
});
    
app.listen(3000);
console.log("http://localhost:3000/");