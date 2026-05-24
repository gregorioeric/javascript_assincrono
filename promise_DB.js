import pool from "./db.js";

const getUsers = async () => {
  const [rows] = await pool.execute("SELECT * FROM clientes;");
  return rows;
};

const users = await getUsers();

console.log(users);
