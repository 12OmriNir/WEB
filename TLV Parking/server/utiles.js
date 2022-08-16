const fs = require('fs')


const readParkingSpots = () => {
    return JSON.parse(fs.readFileSync('./server/parkingSpots.json'), "utf8")
}

const updateParkingSpotsFile = (parkingSpots) => {
    fs.writeFileSync('./server/parkingSpots.json', JSON.stringify(parkingSpots), "utf8")
}

module.exports = {
    readParkingSpots,
    updateParkingSpotsFile
}
