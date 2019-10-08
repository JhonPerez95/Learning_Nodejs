const User = require('../models/users');

getAllUser = (req , res) => {
	User.findAll({ attributes: ['name', 'lastName', 'age', 'email']})
	.then(user => res.send(JSON.stringify(user)))
    .catch(err => res.send(err))
}

getUserId = (req, res)=>{
    const {id} = req.params;
    //console.log(id);
    User.findAll({
        where:{iduser: id},
        attributes: ['name', 'lastName', 'age', 'email']
    })
   .then(user => res.send(JSON.stringify(user)))
  .catch(err => res.send(err));
}

module.exports = {
    getAllUser,
    getUserId
}