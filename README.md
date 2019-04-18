baseproject-ExpressjsAPI
=========

Environment and examples of REST API with Express.js


Requirements
------------

Node.js - npm


Example Routes
----------------

```javascript
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
```

Running
----------------

Only first time to download the node modules:

	npm install

Start the example server listening on port 8888:

	npx nodemon index.js


License
-------

GNU GPLv3


Author Information
------------------

[santiagomr](https://github.com/santiagomr)