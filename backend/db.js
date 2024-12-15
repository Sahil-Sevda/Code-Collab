import pkg from 'pg';
import { ENV } from './configs/constant.js';
const { Client } = pkg;

const client = new Client({
  user: ENV.POSTGRES_USER,
  host: ENV.POSTGRES_HOST,
  database: ENV.POSTGRES_DB,
  password: ENV.POSTGRES_PASS,
  port: ENV.POSTGRES_PORT,
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL database!");
  } catch (err) {
    console.error("Error connecting to PostgreSQL", err);
  }
};

export { client, connectDB };
