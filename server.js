var http = require('http')
var send = require('send')
var url = require('url')

var app = http.createServer(function(req, res){
	return send(req, url.parse(req.url).pathname).root('./public').pipe(res)
});

app.listen(8000)