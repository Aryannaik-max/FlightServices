const { FlightRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class FlightService extends CrudService {
    constructor(){
        super(FlightRepository);
        this.flightRepository = new FlightRepository(); 
    }
    async getAll(filter) {
        try {
            const result = await this.flightRepository.getAll(filter);
            return result;
        } catch (error) {
            console.error("Error fetching flights:", error);
            throw error;
        }
    }
}

module.exports = FlightService;