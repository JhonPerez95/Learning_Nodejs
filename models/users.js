const Sequelize =  require('sequelize');
const Sql = require('../db');

const User = Sql.define('users', {
    iduser: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.STRING,
    lastname: Sequelize.STRING,
    age: Sequelize.INTEGER,
	email: Sequelize.STRING,
	password: Sequelize.STRING
    }, { timestamps: false }
    );

  module.exports = User;