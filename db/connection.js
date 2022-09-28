// get the client 
const mysql = require('mysql2');


// Connect to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MySQL password
        password: 'Indoorsql20$',
        database: 'company'
    },
    console.log('Connected to the company database.')
);

db.promise().query('SELECT 1')
    .then(({rows,fields}) => {
        console.log(rows);
    })
    .catch(console.log)
    .then( () => db.end());


module.exports = db;