import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Persona = db.define('Persona', { //define un nuevo modelo, representando una tabla en la DB
    name: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, 
{
  createdAt: false,
  updatedAt: false
 }
);

export default Persona;