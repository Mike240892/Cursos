var http = require("http"),
	fs = require("fs"),
	viewer = require("./render_view.js");

var v = viewer.view;
http.createServer(function(req,res){
	//console.log(req);
	//console.log(res);
	if(req.url.indexOf("favicon.ico") > 0 ){ return; }

	fs.readFile("./index.html", function(err, html){
		v(err, html, req, res)
	});
}).listen(8080);