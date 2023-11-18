// Atribuir constantes
const express = require('express');
const bodyParser = require('body-parser'); // Corrigido o nome do módulo body-parser
const Bank = require('../models/bank');
const app = express();

// Templates:
// EJS
app.set('view engine', 'ejs');

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * 
 * difinir aonde os arquivos estaticos estão, para o ejs permitir que seja implementado
 * para poderem ser ultilizado no background
 *
 * 
 * */
 

app.use(express.static('views'));



app.get('/', function(req, res) {
    res.render('info');
});

// Rota de login
app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;


    if (username === 'ADM001' && password === '12345678') {
        res.redirect('/admin');
    } else {
        res.send('Falha na autenticação'); 
    }
});

// Rota do formulário
app.get('/form', function(req, res) {
    res.render('form');
});

app.get('/sec', function(req, res) {
    res.render('securit');
});

app.get('/admin', function(req, res) {
    res.render('table');
});
app.get('/prod', function(req, res){
    res.render('prod')
})



app.get('/adm', function (req, res) {
    Bank.findAll()
        .then(function (bank) {
            console.log(bank);
            res.render('table', { bank: bank });
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).send("Ocorreu um erro ao buscar os doadores");
        });
});

app.get('/deletar/:id', function (req, res) {
    Bank.destroy({ where: { 'id': req.params.id } })
    .then(function () {
        res.send("Usuário deletado");
    }).catch(function (erro) {
        res.send("Esse usuário não existe");
    });
});

app.post('/add', function (req, res) {
    Bank.create({
        Nome: req.body.Nome,
        email: req.body.email,
        mensagem: req.body.mensagem
    })
        .then(function () {
            res.redirect('/form');
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).send("Ocorreu um erro ao adicionar o doador");
        });
});



module.exports = app;

