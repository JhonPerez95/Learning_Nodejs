const Sequelize = require('sequelize');
const Sql = require("../db");

const Categories = Sql.define('categories', {
    id_categories: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    base_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

// Categories.associate = () => {
//     Categories.belongsTo()
// };

module.exports = Categories;