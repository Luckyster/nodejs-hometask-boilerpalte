const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user
router.post('/', createUserValid, (req, res, next)=>{
	const {email, phoneNumber} = req.body

	if(UserService.search(phoneNumber) || UserService.search({email})){
		req.res = {status: 400,error:true, message: 'User already defined'}
	} else {
		UserService.create(req.body)
		req.res = {status: 200, message: 'User created'};
	}
	next()
}, responseMiddleware)

router.put('/:id',updateUserValid, (req, res, next)=>{
	const { email, phoneNumber } = req.body;
	const uid = req.params?.id

	if(!UserService.search({id: uid})) req.res = {status: 404, message: 'User not found'}
	else if(UserService.search({phoneNumber}) || UserService.search({email})){
		req.res = {status: 400,message: 'Email or phone number already defined'}
	} else {
		UserService.update(uid, req.body)
		req.res = {status: 200, message: 'User updated'};
	}
	next()
}, responseMiddleware)

router.get('/', (req, res)=>{
	const users = UserService.findAll()
	res.status(200).json(users)
})

router.get('/:id', (req, res, next)=>{
	const {id} = req.params
	const user = UserService.search({id})
	if(!user){
		req.res = {status: 404, message: 'User not found'}
		next()
	}
	res.status(200).json(user)
}, responseMiddleware)

router.delete('/:id', (req, res, next)=>{
	const {id} = req.params
	const user = UserService.search({id})
	if(!user){
		req.res = {status: 404, message: 'User not found'}
		next()
	}
	UserService.delete(id)
	req.res = {status: 200, message: 'User deleted'}
	next()
}, responseMiddleware)



module.exports = router;