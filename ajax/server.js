const bodyParser = require('body-parser')
const express = require('express')
const app = express() // instanciar o express e jogar na var app

//Carregando middlewares, arquivos estaticos em .
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json()) // transformar o json em objeto


//usando upload
const multer = require('multer')

const storage = multer.diskStorage({
    //configura a pasta onde vai salvar o arquivo e nome dele
    destination: function (req, file, callback) {
        callback(null, './upload') // pasta upload 
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalName}` ) // nome do arquivo
    }
})

const upload = multer({ storage }).single('arquivo') // arquivo é o nome do input

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso!')
    })
})

app.get('/teste', (req, res ) => res.send('ok!'))


app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, // joga tudo que veio no body para retornar + um id de resposta, so pra responder la na tela (dummy)
        id: 1
    })
})

// axios2.html
app.get('/parOuImpar', (req, res) => {
    // req.body  (post)
    // req.query (get)
    // req.params para /parOuImpar/:numero
    const par = parseInt(req.query.numero) % 2 === 0 // resto da divisao, se for 0 é par, senao impart

    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Running...'))