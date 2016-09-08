import express from 'express';
import path from 'path';
import engine from 'react-engine';
const app = express();

app.use(express.static(path.join(__dirname,'public'),{
	dotfiles: 'ignore',
	index: false
}));

// Set engine sea react-engine 
//app.engine('.jsx', engine.server.create());
app.engine('.jsx', engine.server.create());

// Set view route
app.set('views', path.join(__dirname, 'app/components/views'));
// the engine will use jsx files
app.set('view engine', 'jsx');
// Set react-engine as the engine of express views
app.set('view', engine.expressView);


app.get('*', function(req, res, next) {
	//console.log(__dirname);
  //res.sendFile(path.resolve(__dirname, './public/index.html'));
  res.render('index');
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