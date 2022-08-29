const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Aa123456',
    port: 5434 
})

const executeQuery = async(qureyText, values) => {
    const result = pool.query(qureyText, values)
    return result;
}

module.exports = {
    executeQuery
}