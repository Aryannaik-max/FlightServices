const { CityService } = require("../services/index");

const cityService = new CityService();

const createCity = async (req, res) => {
    try {
       const city = await cityService.create(req.body); 
       return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created city",
            err:{}
       });
    } catch (error) {
        console.log("Something went wrong in city contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create city",
            err:error
        });
    }
}

const deleteCity = async (req,res) => {
    try {
        await cityService.delete(req.params.id);
        return res.status(200).json({
            data:{},
            success:true,
            message:"Successfully deleted city",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong in city contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete city",
            err:error
        });
    }
}

const getCity = async (req, res) => {
    try {
        const city = await cityService.get(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:"Successfully fetched city",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong in city contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch city",
            err:error
        });
    }
}

const updateCity = async (req, res) => {
    try {
        const updatedCity = await cityService.update(req.params.id, req.body);
        return res.status(200).json({
            data:updatedCity,       
            success:true,
            message:"Successfully updated city",
            err:{}
        }); 
    } catch (error) {
        console.log("Something went wrong in city contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update city",
            err:error
        });
    }
}


const getAllCities = async (req, res) => {
    try {
        const cities = await cityService.getAll(req.query);
        return res.status(200).json({
            data:cities,
            success:true,
            message:"Successfully fetched all cities",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong in city contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch cities",
            err:error
        });
    }
}

module.exports = {
    createCity,
    deleteCity,
    getCity,
    updateCity,
    getAllCities
};