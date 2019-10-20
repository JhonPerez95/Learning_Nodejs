const User = require('../models/users');

getAllUser = (req, res) => {
    User.findAll({ attributes: ['name', 'lastName', 'age', 'email'] })
        .then(user => res.send(JSON.stringify(user)))
        .catch(err => res.send(err))
}

getUserId = (req, res) => {
    const { id } = req.params;
    User.findAll({
        where: { id_user: id },
        attributes: ['name', 'lastName', 'age', 'email']
    })
        .then(user => res.send(JSON.stringify(user)))
        .catch(err => res.send(err));
}

module.exports = {
    getAllUser,
    getUserId
}