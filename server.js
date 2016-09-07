import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname,'public'),{
	dotfiles: 'ignore',
	index: false
}));

app.get('*', function(req, res, next) {
	//console.log(__dirname);
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

//Error
app.use(function(req, res, next) {
  console.log('404')
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});

//Run server
const port = process.env.PORT || 3000;
app.listen(port,function(){
	console.log('Server running in http://localhost:' + port);	
});