const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter
router.post('/', createFighterValid, (req, res, next)=>{
	const {name} = req.body
	console.log('123123')
	if(FighterService.search({name})){
		req.res = {status: 400, message: 'Fighter already defined'}
	} else {
		FighterService.create(req.body)
		req.res = {status: 200, message: 'Fighter created'};
	}
	next()
}, responseMiddleware)

router.put('/:id',updateFighterValid, (req, res, next)=>{
	const { name } = req.body;
	const uid = req.params?.id

	if(!FighterService.search({id: uid})) req.res = {status: 404, message: 'Fighter not found'}
	else if(FighterService.search({name})){
		req.res = {status: 400,message: 'Name already defined'}
	} else {
		FighterService.update(uid, req.body)
		req.res = {status: 200, message: 'Fighter updated'};
	}
	next()
}, responseMiddleware)

router.get('/', (req, res)=>{
	const fighters = FighterService.findAll()
	res.status(200).json(fighters)
})

router.get('/:id', (req, res, next)=>{
	const {id} = req.params
	const fighter = FighterService.search({id})
	if(!fighter){
		req.res = {status: 404, message: 'Fighter not found'}
		next()
	}
	res.status(200).json(fighter)
}, responseMiddleware)

router.delete('/:id', (req, res, next)=>{
	const {id} = req.params
	const fighter = FighterService.search({id})
	if(!fighter){
		req.res = {status: 404, message: 'Fighter not found'}
		next()
	}
	FighterService.delete(id)
	req.res = {status: 200, message: 'Fighter deleted'}
	next()
}, responseMiddleware)

module.exports = router;