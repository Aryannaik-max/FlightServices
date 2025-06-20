const express = require('express');
const router = express.Router(); 
const flightController = require("../../controllers/flight-controller");
const airportController = require('../../controllers/airport-controller');
const cityController = require('../../controllers/city-controller');

router.post('/flights', flightController.createFlight);
router.get('/flights', flightController.getAllFlights);
router.delete('/flights/:id', flightController.deleteFlight);
router.get('/flights/:id', flightController.getFlight);


router.post('/airports', airportController.createAirport);
router.delete('/airports/:id', airportController.deleteAirport);
router.get('/airports/:id', airportController.getAirport);
router.get('/airports', airportController.getAllAirports);
router.patch('/airports/:id', airportController.updateAirport);

router.post('/cities/', cityController.createCity);
router.delete('/cities/:id', cityController.deleteCity);
router.get('/cities/:id', cityController.getCity);
router.get('/cities', cityController.getAllCities);



module.exports = router;
