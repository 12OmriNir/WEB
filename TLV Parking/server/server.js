const express = require('express')
const shortid = require('shortid')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const {readParkingSpots, updateParkingSpotsFile} = require('./utiles.js')

const parkingSpots = readParkingSpots()

app.get('/api/parkingSpots', (req, res) => {

    res.send(parkingSpots)
})

app.get('/api/parkingSpots/:id', (req, res) => {

    const parkingSpot = parkingSpots.find(spot => spot.id === req.params.id)

    if(!parkingSpot){
        res.status(404).send("This parking spot does not exist")
    }
    else{
        res.send(parkingSpot)
    }
})

app.delete('/api/parkingSpots/:id', (req, res) => {
  const parkingId = req.params.id;

  //findIndex+splice
  const indexToRemove = parkingSpots.findIndex((parking) => parking.id === parkingId);
  if (indexToRemove === -1) {
    res.status(404).send("Parking not found. Deletion failed.");
  } else {
    parkingSpots.splice(indexToRemove, 1);
    updateParkingSpotsFile(parkingSpots);
    res.send(`Parking ${parkingId} has been deleted`);
  }
})

app.post('/api/parkingSpots', (req, res) => {
    const newParking = {
        id: shortid.generate(),
        x_coord: req.body.x_coord,
        y_coord: req.body.y_coord,
        address: req.body.address,
        time: Date.now()
    }

    parkingSpots.push(newParking)
    updateParkingSpotsFile(parkingSpots)
    res.send(newParking)
})

app.listen(4000, () => console.log('Server Working...'))