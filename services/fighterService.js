const {FighterRepository} = require('../repositories/fighterRepository');

class FighterService {
	// TODO: Implement methods to work with fighters
	search(search) {
		const item = FighterRepository.getOne(search);
		if (!item) {
			return null;
		}
		return item;
	}

	create(data) {
		return FighterRepository.create(data)
	}

	delete(id) {
		return FighterRepository.delete(id)
	}

	update(id, data) {
		return FighterRepository.update(id, data)
	}

	findAll() {
		return FighterRepository.getAll()
	}
}

module.exports = new FighterService();