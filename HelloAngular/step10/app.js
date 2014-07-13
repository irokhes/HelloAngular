var tasks = [
	{name: "Task1", due: '13/07/2014'},
	{name: "Task2", due: '23/07/2014'},
	{name: "Task3", due: '31/07/2014'},
]

var restify = require('restify');
var server = restify.createServer();

server.listen(8080,function(){
	console.log('%s listening at %s', server.name, server.url);
});


server.get('/tasks', function(req, res, next){
	res.send(tasks);
	return next();
});


server.get('/tasks/:id', function(req, res, next){
	if(req.params.id <= 0 || req.params.id > tasks.length)
		return next(new restify.InvalidArgumentError("Task doesn´t exist"));
	res.send(tasks[req.params.id]);
	return next();
})