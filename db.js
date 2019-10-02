const Sequelize = require ('sequelize');

const db = {
    name: 'Learning_Nodejs',
    user: 'root',
    psw: 'root' ,
    host: 'localhost',
    dialect: 'mysql'
};

const sequelize =  new Sequelize(db.name, db.user, db.psw, {
    host: db.host,
    dialect: db.dialect
});

sequelize
  .authenticate()
  .then(() => {
    console.log('DB is connected  successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize;