import { createTables } from '../database/migrations/createTables.js';
import { connectPostgres } from '../config/postgres.js';

async function migrate() {
  await connectPostgres();
  await createTables();
  process.exit(0);
}

migrate();