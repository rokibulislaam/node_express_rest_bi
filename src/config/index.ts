import dotenv from 'dotenv';
dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}.local`,
});
const config = {
  jwtSecret: process.env.JWT_SECRET,
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
};

export default config;
