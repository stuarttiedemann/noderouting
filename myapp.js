

// var http = require('http');
// var url = require('url');
// var fs = require('fs');
// var homePageHtml = fs.readFileSync('homePageHtml.html');

// function renderNewPage(request,response){
// 	response.writeHead(200,{
// 		'Content-type':'text/html'
// 	})
// 	response.write("Hello World");
// 	response.end();//Needed to keep page from hanging
// }

// function renderHomePage(request, response){
// 	response.writeHead(200,{
// 		'Content-type': 'text/html'
// 	});
// 	response.end(homePageHtml);
// }
// function render404(request, response){
// 	response.writeHead(404);
// 	response.end('404, page not found');
// }

// var server = http.createServer(function(request,response){
// 	var newUrl = '/page/new';
// 	var pathName = url.parse(request.url);
	
// 	if(newUrl == pathName.pathname){
// 		renderNewPage(request,response);
// 	}else if(pathName.pathname == '/'){
// 		renderHomePage(request,response);
// 	}

// 	}else{
// 		render404(request, response);
// 	}
// })

// server.listen(8080);
// console.log("Server is listening on port 8080.");
// console.log("Test nodemon");