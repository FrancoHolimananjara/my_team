const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Salut les amies !');
});

app.listen(3001,()=>{
    console.log("Serveur en écoute");
})