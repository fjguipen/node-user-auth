const express = require('express');
const router = require('./router')
const session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
const genuuid = require('uuid/v1');

const app = express();

const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/nodeAuth',
    collection: 'authSessions'
});


store.on('error', function (error) {
    assert.ifError(error);
    assert.ok(false);
});


app.use(session({
    genid: function(req) {
        return genuuid() // use UUIDs for session IDs
      },
    secret: 'm1Cl4Ve5Up3R s3gUr4 1234s',
    resave: true,
    saveUninitialized: false,
    store: store,
    cookie:{}
}))

app.use('/', router);
app.listen(3000, 'localhost', () => {
    console.log('Servidor escuchando');
});

