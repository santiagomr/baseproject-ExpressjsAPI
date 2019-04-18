// Run with 'npx nodemon index.js'

const express = require('express');
const morgan = require('morgan');
const app = express();


// SETTINGS
app.set('appName', 'Base project ExpressJS');
app.set('port', 8888);
app.set('view engine', 'ejs');


// MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));

    // function logger(request, response, next){
    //     console.log(`Route received: ${request.protocol}://${request.get('host')}${request.originalUrl}`);
    //     next();
    // }
    // app.use(logger);


// ROUTES
app.get('/get', function(request, response){
    response.send('<h1>Hello World!</h1>');
})

app.get('/json', function(request, response){
    response.json({
        regard: 'Hello World!'
    });
})

app.get('/get/:value', function(request, response){
    console.log(request.params);
    response.send('<h1>Hello World ' + request.params.value + '!</h1>');
})

app.post('/post', function(request, response){
    console.log(request.body);
    console.log(request.headers);
    response.send('<h1>OK! Received</h1>');
})

app.all('/place', function(request, response, next){
    console.log('it passed by this place');
    response.send('<h1>It passed by this place</h1>');
})

app.get('/ejs', function(request, response){
    const regards = [{regard: 'welcome'}, {regard: 'bienvenido'}, {regard: 'bem vindo'}];
    response.render('index.ejs', {text: regards});
})

app.use(express.static('public'));

// APP
app.listen(app.get('port'), function(){
    console.log(app.get('appName'));
    console.log('Node server listening on port ', app.get('port'));
})