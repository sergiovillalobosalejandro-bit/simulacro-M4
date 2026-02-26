import pkg from 'pg';
import { env } from './env.js';

const { Pool } = pkg;

export const pool = new Pool(env.db);

export async function connectPostgres() {
  try {
    await pool.query('SELECT 1');
    console.log('PostgreSQL connected ✅');
  } catch (error) {
    console.error('PostgreSQL connection error ❌', error);
    process.exit(1);
  }
}