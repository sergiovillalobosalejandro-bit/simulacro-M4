import 'dotenv/config';

export const env = {
  port: process.env.PORT || 8000,
  nodeEnv: process.env.NODE_ENV,

  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },

  mongoUri: process.env.MONGO_URI
};