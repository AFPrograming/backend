import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('angular', 'root', 'Pipepijo007', {
    host: 'localhost',
    dialect: 'mysql'
  });

export default sequelize;