import dotenv from "dotenv";
dotenv.config();

const ENV = {
  APP_PORT: process.env.APP_PORT,
  POSTGRES_PASS: process.env.POSTGRES_PASS,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  DATABASE_URL: process.env.DATABASE_URL,
};

export { ENV };
