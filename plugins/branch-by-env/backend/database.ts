import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/Fenwave', {
  dialect: 'postgres',
});

export default sequelize;