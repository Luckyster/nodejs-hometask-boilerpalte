const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    const {power, defense, health  } = req.body;

    if(power < 2 || power > 99) throw new Error('Invalid power number');
    if(defense < 2 ||  defense > 9) throw new Error('Invalid defence number')
    if(health < 81 ||  defense > 119) throw new Error('Invalid health number')

    next();
}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    next();
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;