const { Airport } = require('../models/index')
const { CrudRepository } = require('./index');

class AirportRepository extends CrudRepository {
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepository;