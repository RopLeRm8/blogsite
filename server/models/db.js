import Sequelize from 'sequelize';
import sequelizeConfig from '../config/sequalize.js';
import userModel from './user.js';

const sequelize = new Sequelize(sequelizeConfig);

const db = {
    sequelize,
    Sequelize,
    User: userModel(sequelize, Sequelize.DataTypes), 
};

export default db;