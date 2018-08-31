const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded( {extended: true} ));

// pegar requisições POST
app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h3>Parabéns, usuário incluído!</h3>')
});


// pegar requisições POST
app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h3>Parabéns. Usuário alterado!</h3>')
});

//  configura a porta 
app.listen(3003);


