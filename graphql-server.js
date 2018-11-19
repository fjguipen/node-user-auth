const express = require('express');

const GQLServer = express();


GQLServer.get('/graphql', (req,res,next)=>{
    res.send(`<h1>Bienvenido a GraphQL</h1>`)
})

GQLServer.listen(3002, "localhost",() => {
    console.log('Servidor GraphQL escuchando');
});