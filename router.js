var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

const user = {name:"root", pass: "0000"};


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


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


router.get('/login', (req, res, next)=>{
    console.log(`Antes de login ${req.sessionID}`)
    if (req.session.user){
        res.send(
            `<!DOCTYPE html>
            <html>
                <head></head>
                <body>
                <h3>Ya estás loggeado</h3>
                <a href="/">Volver</a>
                <a href="/logout">Salir</a>
                </body>
            </html>`
        );    
    } else {
        res.sendFile('/home/javigp/node-apps/node-user-auth/pages/login.html')
    }
    
})

router.post('/login', (req, res, next)=>{
    if (user.name === req.body.user && user.pass === req.body.passw) {
        req.session.user = req.body.user;
        res.send(
            `<!DOCTYPE html>
            <html>
                <head></head>
                <body>
                <h3>Hola ${req.body.user}</h3>
                <a href="/">Volver</a>
                <a href="/logout">Salir</a>
                </body>
            </html>`
        )        
    }
    else res.redirect('/login')  
})

router.get('/logout', (req,res,next)=>{
    if (req.session.user){
        req.session.destroy(err=>{
            //console.log(err.message)
        })
        res.redirect('/login')
    } else {
        res.redirect('/login')
    }
})


module.exports = router;