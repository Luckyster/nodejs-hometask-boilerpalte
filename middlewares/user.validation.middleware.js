const {user} = require('../models/user');
const createUserValid = (req, res, next) => {
	// TODO: Implement validatior for user entity during creation
	if(!Object.keys(req.body).length) res.json({"message": "Empty fields", "status": 500})
	for (const [key, val] of Object.entries(req.body)) {
		// console.log(!user[key]?.reg?.test(val), 'typeof');
		if (
		    typeof val !== user[key]?.type ||
 				(user[key]?.min && val.length < user[key]?.min) ||
        (user[key]?.reg && !user[key]?.reg?.test(val)) ||
        !!user[key]?.reserved
    ) res.json({"message": "Some type of fields invalid", "status": 500})
	}

	// const {email, phoneNumber, password} = req.body;
  //
	// if (password.length < 3) throw new Error('Invalid password');
	// if (!email.test(/^.@gmail.com$/i)) throw new Error('Invalid email');
	// if (!phoneNumber.test(/^\+380[0-9]{9}$/)) throw new Error('Invalid phone')

	next();
}

const updateUserValid = (req, res, next) => {
	// TODO: Implement validatior for user entity during update

	next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;