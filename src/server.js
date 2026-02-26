import app from './app.js';
import { env } from './config/env.js';
import { connectPostgres } from './config/postgres.js';
import { connectMongo } from './config/mongo.js';

async function start() {
  try {
    await connectPostgres();
    await connectMongo();

    app.listen(env.port, () => {
      console.log(`Server running on port ${env.port} 🚀`);
    });

  } catch (error) {
    console.error('Startup error:', error);
    process.exit(1);
  }
}

start();