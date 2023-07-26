// models/equipment.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Equipment = sequelize.define('Equipment', {
  serialnumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure that each serial number is unique
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // Add more attributes as needed...
});

export default Equipment;
