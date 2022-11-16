const express = require('express');

const { syncDataBase } = require('./models');

const app = express();

app.get('/',(req,res)=>{
    res.send('Salut les amies !');
});

// base de donnée
syncDataBase;

app.listen(3001,()=>{
    console.log("Serveur en écoute");
})