// var pg=require(pg);
// var db=pg.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
// });

// db.connect(function(err){
//     if (err) throw err; 
//     console.log("connected");
// });

const { Pool } = require('pg');
const pool = new Pool({
	user: 'postgres',
	password: 'suci@122',
	host: 'localhost',
	port: '5432',
	database: 'crud',
});

pool
.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});
	module.exports = pool;