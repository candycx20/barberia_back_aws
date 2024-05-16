//importamos el Modelo
import CitaModel from "../models/CitaModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllCitas = async (req, res) => {
    try {
        const citas = await CitaModel.findAll()
        res.json(citas)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getCita = async (req, res) => {
        try {
            const cita = await CitaModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(cita[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createCita = async (req, res) => {
    try {
       await CitaModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateCita = async (req, res) => {
    try {
        await CitaModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteCita = async (req, res) => {
    try {
        await CitaModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}