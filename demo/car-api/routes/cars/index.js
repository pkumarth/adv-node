const cars = require('express').Router();
const allcars = require('./allcars');
const single = require('./single');
const findObject = require('../../utils/findObject');



cars.get('/', allcars);
cars.get('/:carId', single);

//validation middleware
cars.param('carId', findObject('car'));

module.exports = cars;