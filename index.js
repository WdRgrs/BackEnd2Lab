const express = require('express');
const app = express();
const cors = require('cors');
const ctrl = require('./controller')

const { getHouses, deleteHouse, createHouse, updateHouse } = ctrl;

app.use(express.json());
app.use(cors());


app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse)
app.put('/api/houses/:houseId', updateHouse)
app.delete('/api/houses/:houseId', deleteHouse)




const port = 4004;
app.listen(port, function() { console.log(`This server number is ${port}`)});