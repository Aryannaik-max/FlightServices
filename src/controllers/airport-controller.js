const { AirportService } = require("../services/index");

const airportService = new AirportService();

const createAirport = async (req, res) => {
    try {
       const airport = await airportService.create(req.body); 
       return res.status(201).json({
            data:airport,
            success:true,
            message:"Successfully created airport",
            err:{}
       });
    } catch (error) {
        console.log("Something went wrong in airport contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create airport",
            err:error
        });
    }
}

const deleteAirport = async (req,res) => {
    try {
        await airportService.delete(req.params.id);
        return res.status(200).json({
            data:{},
            success:true,
            message:"Successfully deleted airport",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong in airport contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete airport",
            err:error
        });
    }
}

const getAirport = async (req, res) => {
    try {
        const airport = await airportService.get(req.params.id);
        return res.status(200).json({
            data:airport,
            success:true,
            message:"Successfully fetched airport",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong in airport contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch airport",
            err:error
        });
    }
}

const updateAirport = async (req, res) => {
    try {
        const updateAirprot = await airportService.update(req.params.id, req.body);
        return res.status(200).json({
            data:updateAirprot,       
            success:true,
            message:"Successfully updated airport",
            err:{}
        }); 
    } catch (error) {
        console.log("Something went wrong in airport contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update airport",
            err:error
        });
    }
}


const getAllAirports = async (req, res) => {
    try {
        const airports = await airportService.getAll(req.query);
        return res.status(200).json({
            data:airports,
            success:true,
            message:"Successfully fetched all airports",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong in airport contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch airports",
            err:error
        });
    }
}

module.exports = {
    createAirport,
    deleteAirport,
    getAirport,
    updateAirport,
    getAllAirports
};