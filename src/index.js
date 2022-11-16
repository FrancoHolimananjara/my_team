const express = require('express');
const routes = require('./route/index');

const { syncDataBase } = require('./models');

const app = express();

app.use(express.json())
    .use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Salut les amies !');
});

// base de donnée
syncDataBase;

app.use('/api',routes);

app.listen(3001,()=>{
    console.log("Serveur en écoute");
})