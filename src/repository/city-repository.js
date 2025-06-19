const { Op } = require('sequelize');
const { City } = require('../models/index');
const { CrudRepository } = require('./index');

class CityRepository extends CrudRepository {

    constructor(){
        super(City);
        this.City = City;
    }

    async getAllCity(filter){
        try {
            if(filter.name){
                const cities = await this.City.findAll({
                where: {
                    name: {
                    [Op.startsWith]: filter.name
                    }
                }
                });
                return cities;
            }
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }
}


module.exports = CityRepository;