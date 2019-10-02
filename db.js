const Sequelize = require ('sequelize');

const sequelize =  new Sequelize('Learning_Nodejs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
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