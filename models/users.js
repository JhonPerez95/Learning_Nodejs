const Sequelize =  require('sequelize');
const Sql = require('../db');
const Category = require ('../models/categories');

const User = Sql.define('users', {
    id_user: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.STRING,
    lastname: Sequelize.STRING,
    age: Sequelize.INTEGER,
	email: Sequelize.STRING,
	password: Sequelize.STRING
}, { timestamps: false });

Sequelize.associate = (Category)=>{
    User.hasMany(Category);
};

module.exports = User;