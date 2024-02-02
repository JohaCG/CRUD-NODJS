// Tarea Model
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conexion.js';
import UserModel from './UserModel.js';

export const Tarea = sequelize.define('tarea', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Horasempleadas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  timestamps: false,
});

UserModel.hasMany(Tarea, { as: 'tarea', foreignKey: 'empleadoId' });
