const { flight } = require('../model/index');
const { Op } = require('sequelize');
const { CrudRepository } = require('./index');

class FlightRepository extends CrudRepository {
    constructor(){
        super(flight);
        this.flight = flight;
    }
    #createFilter(data){
        let filter = {};
        if(data.departureTime){
            filter.departureTime = data.departureTime;
        }
        if(data.arrivalTime){
            filter.arrivalTime = data.arrivalTime;
        }

        let priceFilter = [];
        if(data.minPrice){
            priceFilter.push({[Op.gte]: data.minPrice});
        }
        if(data.maxPrice){
            priceFilter.push({[Op.lte]: data.maxPrice});
        }

        Object.assign(filter,{[Op.and]: priceFilter});

        return filter;
    }

    async getAll(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const result = await this.flight.findAll({
            where:filterObject
        });
            return result;
        } catch (error) {
            console.log("Something went wrong in flight repo");
            throw error;
        }
    }
}

module.exports = FlightRepository;