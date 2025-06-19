const {CityRepository} = require("../repository/index");
const CrudService = require("./crud-service");

class CityService extends CrudService {
    constructor(){
        super(CityRepository);
        this.CityRepository = new CityRepository();
    }

    async getAllCity(filter){
        try {
            const cities = await this.cityRepository.getAllCity(filter)
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = CityService;