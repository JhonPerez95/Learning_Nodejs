const User = require('../models/users');

exports.getAllUser = (req, res) => {
	User.findAll({ attributes: ['name', 'lastName', 'age', 'email']})
	.then(user => res.send(JSON.stringify(user)))
    .catch(err => res.send(err))
    }