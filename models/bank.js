const db = require('./db');

const Bank = db.sequelize.define('bancos', {
    Nome: {
        type: db.Sequelize.STRING(255)
    },
    email: {
        type: db.Sequelize.STRING(255)
    }, 
    mensagem: {
        type: db.Sequelize.STRING(255)
    }
});



//Bank.sync({ force: true });
module.exports = Bank;
