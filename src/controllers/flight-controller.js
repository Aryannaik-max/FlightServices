const flight = require("../models/flight");
const { FlightService } = require("../services/index");

const flightService = new FlightService();

const createFlight = async (req, res) => {
    try {
        const flightDetails = {
            flightNumber: req.body.flightNumber,
            airplainId: req.body.airplainId,        
            arrivalAirportId: req.body.arrivalAirportId,
            departureAirportId: req.body.departureAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,          
        }
        const flight = await flightService.create(flightDetails); 
        return res.status(201).json({
            data:flight,
            success:true,
            message:"Successfully created city",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong in flight contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create flight",
            err:error
        });
    }
}

const deleteFlight = async (req,res) => {
    try {
        await flightService.delete(req.params.id);
        return res.status(200).json({
            data:{},
            success:true,
            message:"Successfully deleted flight",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong in flight contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete flight",
            err:error
        });
    }
}

const getFlight = async (req, res) => {
    try {
        const flight = await flightService.get(req.params.id);
        return res.status(200).json({
            data:flight,
            success:true,
            message:"Successfully fetched flight",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong in flight contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch flight",
            err:error
        });
    }
}

const updateFlight = async (req, res) => {
    try {
        const updatedFlight = await flightService.update(req.params.id, req.body);
        return res.status(200).json({
            data:updatedFlight,       
            success:true,
            message:"Successfully updated flight",
            err:{}
        }); 
    } catch (error) {
        console.log("Something went wrong in flight contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update flight",
            err:error
        });
    }
}


const getAllFlights = async (req, res) => {
    try {
        const flights = await flightService.getAll(req.query);
        return res.status(200).json({
            data:flights,
            success:true,
            message:"Successfully fetched all flights",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong in flight contoller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch flights",
            err:error
        });
    }
}

module.exports = {
    createFlight,
    deleteFlight,
    getFlight,
    updateFlight,
    getAllFlights
};