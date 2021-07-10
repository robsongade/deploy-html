const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/v1',(req,res)=>{
    res.status(200).json({
        version:'0.0.1'
    })
})
const port = process.env.PORT || 3131
app.listen(port,'0.0.0.0',()=>{
    console.log('Carregando na porta', port)
})
