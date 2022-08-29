const express = require('express')
const shortid = require('shortid')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const {readParkingSpots, addNewParkingSpot, getSpecificParkingSpot, deleteParkingSpot} = require('./utiles.js')

app.get('/api/parkingSpots', async (req, res) => {
  const parkingSpots = await readParkingSpots()
  res.send(parkingSpots)
})

app.get('/api/parkingSpots/:id', async (req, res) => {
  
  const parkingSpot = await getSpecificParkingSpot(req.params.id)
  
  if(!parkingSpot){
    res.status(404).send("This parking spot does not exist")
  }
  else{
    res.send(parkingSpot)
  }
})

app.delete('/api/parkingSpots/:id', async(req, res) => {
  
  const success = await deleteParkingSpot(req.params.id)

  res.send(success)
})

app.post('/api/parkingSpots', async(req, res) => {
    const newParking = {
        id: shortid.generate(),
        x_coord: req.body.x_coord,
        y_coord: req.body.y_coord,
        address: req.body.address,
        time: Date.now()
    }

    await addNewParkingSpot(Object.values(newParking))
    res.send(newParking)
})

app.listen(2000 , () => console.log('Server Working...'))