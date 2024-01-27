import dotenv from 'dotenv';
dotenv.config();

const sequelizeConfig = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    pool: {
      max: 5, 
      min: 0, 
      acquire: 30000,
      idle: 10000 
    },
  };
  
  export default sequelizeConfig;