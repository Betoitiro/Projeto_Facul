// db.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bankcad', 'root', '525715', {
  host: 'localhost',
  dialect: 'mysql'
});

// Testar a comunicação com o banco
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida');
  })
  .catch(err => {
    console.log('Erro ao se comunicar: ' + err);
  });

module.exports = {
  Sequelize,
  sequelize
};
