const models = require('express').Router();
const allmodels = require('./allmodels');
const single = require('./single');
const cars = require('./cars');
const findObject=require('../../utils/findObject');

//models.use(cars);
models.use('/:modelId/cars', cars);


models.get('/', allmodels);
models.get('/:modelId', single);
//models.get('/:modelId/cars', cars);

//validation middleware
models.param('modelId', findObject('model'));




module.exports = models;