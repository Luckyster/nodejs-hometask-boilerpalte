const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    create(data){
        return UserRepository.create(data)
    }

    delete(id){
        return UserRepository.delete(id)
    }
    update(id, data){
        return UserRepository.update(id, data)
    }
    findAll(){
        return UserRepository.getAll()
    }
}

module.exports = new UserService();