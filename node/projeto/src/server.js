const port = 3003;
const express = require('express')
const app = express()
const dataBase = require('./dataBase')
const bodyParser = require('body-parser')

// para cada acao, passa pelo bodyParser
app.use(bodyParser.urlencoded( {extended: true} ))

app.get('/products', (req, res, next) =>{
    console.log('Middleware 1...')
    next()
})

app.get('/products', (req, res, next) => {
    //res.send({name: 'Laptop', price: 1299.99}) // converter para json
    res.send(dataBase.getAllProducts())
})

app.get('/products/:id', (req, res, next) => {
    res.send(dataBase.getProduct(req.params.id)) // req.params.id, pega o valor de :id
})

app.post('/products', (req, res, next) => {
    const product = dataBase.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) // Converte em JSON para ir para web
})

// use this for update an exist product
app.put('/products/:id', (req, res, next) => {
    const product = dataBase.saveProduct({
        id: req.params.id,
        name: req.body.nome,
        price: req.body.price
    })
    res.send(product)
})

// Just for remove a product
app.delete('/products/:id', (req, res, next) => {
    console.log(`Id a ser removido ${req.params.id}`)
    const product = dataBase.removeProduct(req.params.id);
    res.send(product)
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
})