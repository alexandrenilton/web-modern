const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//importando minha api
const usuarioApi = require('./api/usuario');

// require('./api/produto')(app, 'com param!') OU:
const produtoApi = require('./api/produto');
produtoApi(app, 'Com param!');


app.use(bodyParser.text()); //qualquer texto q chegue no corpo vai ser 
app.use(bodyParser.json()); // interpreta json
app.use(bodyParser.urlencoded({extended: true})); // interpreta campos input do HTML - forms

//const saudacao = require('./saudacaoMid');
// app.use(saudacao('Alexandre'))
// app.use(saudacao({option1: 'Alexandre'}))

// const myLogger = require('./anotherMiddleware')
// app.use(myLogger)


app.post('/usuario', usuarioApi.salvar)
app.get ('/usuario', usuarioApi.obter)


app.use('/opa', (req, res, next) => {
    console.log('Sera que serei chamado?');
    next();
});

// lendo dados da requisição
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`);
});

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`);
});

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    // tudo isso acima, com bodyparser ficará: 
    console.log(`valor de req.body.nome: ${req.body.nome} `);
    const jsonStr = JSON.stringify(req.body);
    console.log(`JSON STR = ${jsonStr}`);
    res.send(req.body);
})

app.get('/opa', (req, res, next) => {
    //res.send('Je suis très bien');
    
    //Tipos de retornos
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3},
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    // res.json({
    //     name: 'IPad 32Gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    //res.send('<h1>Estou bem!</h1><br><br><h2>Tipo é HTML!</h2>')
    next();
});

app.use('/opa', (req, res) => {
    console.log('Sera que serei chamado 2?')
});



app.listen(3000, () => {
    console.log('Backend running... at port 3000')
});
