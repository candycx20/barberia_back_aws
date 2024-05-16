//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";
import ClienteModel from "./ClienteModel.js"

 const CitaModel = db.define('citas', {
     fechaReservacion: { type: DataTypes.DATE },
     horaReservacion: { type: DataTypes.TIME },
     cliente_id: { type: DataTypes.INTEGER, 
        references: {
            model: ClienteModel,
            key: 'id'
        }
    },
 })

 export default CitaModel