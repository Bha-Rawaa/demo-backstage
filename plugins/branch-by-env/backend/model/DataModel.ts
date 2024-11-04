import { DataTypes } from 'sequelize';
import sequelize from '../database';

const DataModel = sequelize.define('Data', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default DataModel;
