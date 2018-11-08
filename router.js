var express = require('express');
var router = express.Router();

router.use((req, res, next)=>{
    if (req.url === '/'){
        console.log("Router activado")
    }
    
    next();
})

router.get('/', (req,res,next)=>{
    res.send(`<h1>Bienvenido</h1>
                <a href="/login">Ingresar</a>`)
})



router.get('/logged/:userID', (req, res, next)=>{
    if (req.params.userID === "paco"){
        res.sendFile('/home/javigp/node-apps/node-user-auth/index.html')
    }else{
        res.send("No estas registrado")
    } 
})


module.exports = router;