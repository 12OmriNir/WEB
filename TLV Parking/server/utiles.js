const {executeQuery} = require('./DBConnector.js')


const readParkingSpots = async () => {
    const res = await executeQuery('SELECT * FROM parkingspots')
    return res.rows;
}

const getSpecificParkingSpot = async (id) => {
    const res = await executeQuery('SELECT * FROM parkingspots WHERE id = $1', [id])
    return res.rows[0];
}

const addNewParkingSpot = async (values) => {
    const res = await executeQuery('INSERT INTO parkingspots VALUES ($1,$2,$3,$4,$5)', values)
    return res.rows[0];
}

const deleteParkingSpot = async (id) => { 
    await executeQuery('DELETE FROM parkingspots WHERE id = $1', [id])
}

module.exports = {
    readParkingSpots,
    getSpecificParkingSpot,
    addNewParkingSpot,
    deleteParkingSpot
}
