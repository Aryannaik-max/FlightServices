const { Airplane } = require('../models/index');
const { CrudRepository } = require('./index');

class AirplaneRepository extends CrudRepository {
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepository;