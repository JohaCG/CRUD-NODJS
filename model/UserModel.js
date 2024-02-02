// User Model
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conexion.js';


export const UserModel = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Departamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Horastrabajadas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salario: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fechaContratacion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
}, {
  timestamps: false,
});

export default UserModel;

