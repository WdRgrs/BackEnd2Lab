const houses = require('./db.json')

let id = 4;


module.exports = {
    getHouses: function(req, res) {
        res.status(200).send(houses);
    },
    createHouse: function(req, res) {
        const { address, price, imageURL } = req.body;
        
        const newHouse = {
            id,
            address,
            price,
            imageURL
        }
        
        houses.push(newHouse);
        id++;
        
        res.status(200).send(houses);
    },
    updateHouse: function(req, res) {
        // console.log(req.params.houseId); //house id
        // console.log(req.body.type) 
        // let i = req.params.houseId;
        let i = houses.findIndex(function(houseObj) {
            return houseObj.id === +req.params.houseId
        })
        if (req.body.type === 'plus') {
            houses[i].price += 10000
        }
        if (req.body.type === 'minus') {
            houses[i].price -= 10000
        }
        res.status(200).send(houses);        
    },
    deleteHouse: function(req, res) {
        console.log(req.params.houseId)
    
        const tgtIndex = houses.findIndex(function(houseObj) {
            return houseObj.id === +req.params.houseId;
        });
    
        console.log(tgtIndex);
    
        houses.splice(tgtIndex, 1);
        res.status(200).send(houses);
    }
    
};

