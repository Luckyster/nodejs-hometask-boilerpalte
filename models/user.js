exports.user = {
	id: {reserved: true},
	firstName: {type: 'string', min: 1},
	lastName: {type: 'string', min: 1},
	email: {type: 'string', reg: new RegExp(/^.+@gmail\.com$/)},
	phoneNumber: {type: 'string', reg: new RegExp(/^\+380[0-9]{9}$/)},
	password: {type: 'string', min: 3} // min 3 symbols
}