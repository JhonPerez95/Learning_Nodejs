const Category = require("../models/categories");

getAllCategories = (req, res)=>{
    Category.findAll({ attributes: ['name', 'base_category']})
	.then(categories => res.send(JSON.stringify(categories)))
    .catch(err => res.send(err))
};

getCategoryId = (req, res)=>{
    const {id} = req.params;
    Category.findAll({
        where:{id_categories: id},
        attributes: ['name', 'base_category', 'id_user']
    })
    .then(categories => res.send(JSON.stringify(categories)))
    .catch(err => res.send(err))
}

module.exports = {
    getAllCategories,
    getCategoryId
}