import { pool } from '../../config/postgres.js';

export const patientRepository = {

  async findAll() {
    const { rows } = await pool.query('SELECT * FROM patients');
    return rows;
  },

  async create(data) {
    const { name, age } = data;

    const { rows } = await pool.query(
      'INSERT INTO patients (name, age) VALUES ($1, $2) RETURNING *',
      [name, age]
    );

    return rows[0];
  }

};