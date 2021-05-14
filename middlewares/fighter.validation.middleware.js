const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation

    for (const [key, val] of Object.entries(req.body)) {
        if (
            typeof val !== fighter[key]?.type ||
            (fighter[key]?.min && val.length < fighter[key]?.min) ||
            (fighter[key]?.max && val.length > fighter[key]?.max) ||
            !!fighter[key]?.reserved ||
            (!val && fighter[key]?.required)
         )
         {
            return res.status(400).json({error: true, message: 'Fighter entity to create isn\'t valid'})
            // next()
        }
        if(!val && fighter[key]?.default){
            req.body[key] = fighter[key].default
        }
    }

    next();
}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    if(!req?.params?.id) return res.status(400).json({error: true, message: 'Fighter id is not defined'})

    for (const [key, val] of Object.entries(req.body)) {
        if (
            !fighter[key] ||
            typeof val !== fighter[key]?.type ||
            (fighter[key]?.min && val.length < fighter[key]?.min) ||
            (fighter[key]?.max && val.length > fighter[key]?.max) ||
            !!fighter[key]?.reserved
        ) {
            return res.status(400).json({error: true, message: 'Fighter entity to update isn\'t valid'})
            // next()
        }
    }
    if(!Object.keys(req.body)) return res.status(400).json({error: true, message: 'You should specify at least one field'})
    next();
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;