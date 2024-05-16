//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const ClienteModel = db.define('clientes', {
     nombres: { type: DataTypes.STRING },
     apellidos: { type: DataTypes.STRING },
 })

 export default ClienteModel