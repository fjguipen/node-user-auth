const express = require('express');

const GQLServer = express();


GQLServer.get('/', (req,res,next)=>{
    res.send(`<h1>Bienvenido a GraphQL</h1>`)
})

GQLServer.listen(3002, "192.168.1.193",() => {
    console.log('Servidor GraphQL escuchando');
});