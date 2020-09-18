const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  password: 'root',
  host: 'localhost',
  port: 3306,
  database: 'bank_account'
});

module.exports = { pool };
