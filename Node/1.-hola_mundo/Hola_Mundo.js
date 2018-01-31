var http = require("http");

var manejador = function(solicitud, respuesta){
	console.log("Petición recibida");
	respuesta.end("Hola mundo");
};

var servidor = http.createServer(manejador);

servidor.listen(8080);