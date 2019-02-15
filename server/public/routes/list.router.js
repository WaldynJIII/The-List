const express = require('express');
const listRouter = express.Router();
const pg = require('pg');
// DB CONNECTION
const pool = pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'list_to_do',
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('Postgresql connected');
});
pool.on('error', (error) => {
    console.log('Error with postgres pool', error);
});
module.exports = listRouter;