const data = require('../../data.json');

module.exports = (req, res) => {
    const carId = req.params.carId * 1;
    const car = data.cars.find(car => car.id === carId);
    // for (const model in data.models) {
    //     if(model.id===modelId){
    //          res.status(200).json(model);
    //     }
    // }    
    res.status(200).json(car);
};