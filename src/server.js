var http = require('http');
var proxy = http.createServer(function(request, response) {
	var options = {
		host: '127.0.0.1', // 这里是代理服务器
		port: 80,             // 这里是代理服务器端口
		path: "127.0.0.1:3000",
		method: "post",
		headers: {
		  // 如果代理服务器需要认证
		}
	};
	var req = http.request(options, function(req, res) {
		console.log(response);
		res.pipe(response);
	}).end();
}).listen(8080);