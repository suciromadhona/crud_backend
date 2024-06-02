const pool = require('./db_config');

//Data yang ingin dimasukkan ke tabel users
const userData = {
    username: 'jaemin',
    email: 'najaem@gmail.com',
    password: 'ttalgi',
};

//Perintah Sql Insert menyisipkan data ke dalam tabel users
const insertQuery = {
    text :`INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`,
    values : [userData.username, userData.email, userData.password]
};

//Menjalankan perintsh sql insert menggunakan pool koneksi
pool.query (insertQuery, (err,res) => {
    if (err){
        console.error('error inserting err');
    }else{
        console.log('Data Insert succes');
    } 
pool.end();
});