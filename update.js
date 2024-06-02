const pool=require('./db_config');

const updateUser = async (id, newUsername, newEmail, newPassword) => {
    const client = await pool.connect();
    try {
      const query = `
        UPDATE users
        SET username = $1, email = $2, password = $3
        WHERE id = $4
      `;
      const values = [newUsername, newEmail, newPassword, id]; //menyimpan nilai nilai yang akan digunaakan dalam query
      const res = await client.query(query, values); //mengeksekusi query sql dengan nilai nilai yang diberikan
      if (res.rowCount > 0) { //kalo melebihi nol update user itu sukses
        console.log(`User with ID ${id} updated successfully`);
      } else {
        console.log(`No user found with ID ${id}`);
      }
    } catch (err) {
      console.error('Error updating user:', err);
    } finally {
      client.release(); //melepaskan konek si ke pool
    }
  };
  
  // Panggil fungsi updateUser dengan data yang ingin diperbarui
  updateUser(9, 'dimas', 'dimas@example.com', 'new_password123');
  updateUser(7, 'sesty', 'sesty@example.com', 'password123');