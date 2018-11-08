const express = require('express');
const router = require('./router')
const httpProxy = require('http-proxy');

const app = express();

httpProxy.createProxyServer({target:'http://localhost:3001'}).listen(3000); 


app.use('/', router);
app.listen(3001, 'localhost',() => {
    console.log('Servidor escuchando');
});

