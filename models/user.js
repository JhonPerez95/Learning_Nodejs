const Sequelize =  require('sequelize');
const Sql = require('../db');

const User = Sql.define('user', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
	name: Sequelize.STRING,
	email: Sequelize.STRING,
	password: Sequelize.STRING
    }, { timestamps: false }
    );

  module.exports = User;