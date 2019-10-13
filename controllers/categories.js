const Category = require("../models/categories");

getAllCategories = (req, res)=>{
    Category.findAll({ attributes: ['name']})
	.then(categories => res.send(JSON.stringify(categories)))
    .catch(err => res.send(err))
};

module.exports = {
    getAllCategories
}