const app = require('./Rotas/app');  // Corrigido o caminho do arquivo app

const PORT = process.env.PORT || 5432; // Porta que o servidor local vai ser aberto
app.listen(PORT, function () {
    // Retorno no console, exibindo a URL que o localhost está hospedado
    console.log(`O servidor está rodando na URL http://localhost:${PORT}`);
});
