function view(err, html, req, res){
	var html_string = html.toString();
		variables = html_string.match(/[^\{\}]+(?=\})/g),
		nombre = "",
		parser = require("./params_parser.js"),
		p = parser.parse,
		parametros = p(req);

	for (var i = variables.length - 1; i >= 0; i--) {
		var variable = variables[i];
		var value = eval(variables[i]);
		html_string = html_string.replace("{"+variables[i]+"}",parametros[variables[i]]);
	};

	res.writeHead(200, {"Content-Type":"text/html"})
	res.write(html_string);
	res.end();
}

module.exports.view = view;