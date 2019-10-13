const Sequelize = require('sequelize');
const Sql = require("../db");
const User = require("../models/users");

const Category = Sql.define('categories',{
    id_categories:{
        type: Sequelize.INTEGER, primaryKey: true
    },
    name: Sequelize.STRING,
    base_category: Sequelize.SMALLINT,
}, { timestamps: false });

Category.associate = (User)=>{
    Category.belongsTo(User);
};
 module.exports = Category;