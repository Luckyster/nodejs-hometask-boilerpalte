const {user} = require('../models/user');
const createUserValid = (req, res, next) => {
	// TODO: Implement validatior for user entity during creation
	// if(!Object.keys(req.body).length) res.json({"message": "Empty fields", "status": 500})
	for (const [key, val] of Object.entries(req.body)) {
		if (
		    typeof val !== user[key]?.type ||
 				(user[key]?.min && val.length < user[key]?.min) ||
        (user[key]?.reg && !user[key]?.reg?.test(val)) ||
        !!user[key]?.reserved
    ) {
			res.status(400).json({error: true, message: 'User entity to create isn\'t valid'})
			// next()
		}
	}
	// req.user = req.body;
	next();
}

const updateUserValid = (req, res, next) => {
	// TODO: Implement validatior for user entity during update
	if(!req?.params?.id) res.status(400).json({error: true, message: 'User id is not defined'})

	for (const [key, val] of Object.entries(req.body)) {
		if (
				!user[key] ||
				typeof val !== user[key]?.type ||
				(user[key]?.min && val.length < user[key]?.min) ||
				(user[key]?.reg && !user[key]?.reg?.test(val))
		) {
			res.status(400).json({error: true, message: 'User entity to create isn\'t valid'})
			// next()
		}
	}
	next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;