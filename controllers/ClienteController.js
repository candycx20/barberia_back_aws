//importamos el Modelo
import ClienteModel from "../models/ClienteModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllClientes = async (req, res) => {
    try {
        const clientes = await ClienteModel.findAll()
        res.json(clientes)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getCliente = async (req, res) => {
        try {
            const clientes = await ClienteModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(clientes[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}