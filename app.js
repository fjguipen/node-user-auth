var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send('Hello World')
});

app.listen(3000,"192.168.1.193", ()=>{
    console.log('Servidor escuchando');
});localStorage