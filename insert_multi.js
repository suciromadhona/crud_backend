const pool = require('./db_config');

const usersData=[
    {username:'putri lestari', email:'putrilestari@gmail.com', password:'57390'},
    {username:'kholifah', email:'ifahcantik@gmail.com', password:'13930'},
    {username:'sestyfadlika', email:'sestynur@gmail.com', password:'18393'},
    {username:'nazla natasha', email:'jeno@gmail.com', password:'73527'},
    {username:'dimas alfiandi', email:'alfiantodimas06@gmail.com', password:'17269'},

]

const insertUsers = async () => {
    const client = await pool.connect();
    try {
      await client.query('BEGIN'); // Memulai transaksi
  
      for (const user of usersData) {
        await client.query(
          'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
          [user.username, user.email, user.password]
        );
      }
  
      await client.query('COMMIT'); // Commit transaksi jika tidak ada error
      console.log('All users inserted successfully');
    } catch (err) {
      await client.query('ROLLBACK'); // Rollback transaksi jika terjadi error
      console.error('Error inserting users:', err);
    } finally {
      client.release(); // Melepaskan koneksi
    }
  };
  
  insertUsers();