var http = require('http');
var proxy = http.createServer(function(request, response) {
	var options = {
		host: '127.0.0.1', // �����Ǵ��������
		port: 80,             // �����Ǵ���������˿�
		path: "127.0.0.1:3000",
		method: "post",
		headers: {
		  // ��������������Ҫ��֤
		}
	};
	var req = http.request(options, function(req, res) {
		console.log(response);
		res.pipe(response);
	}).end();
}).listen(8080);