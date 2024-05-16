import express from 'express'
import { getAllCitas, getCita, createCita, updateCita, deleteCita } from '../controllers/CitaController.js'
import { getAllClientes, getCliente} from '../controllers/ClienteController.js'
const router = express.Router()

router.get('/citas/', getAllCitas)
router.get('/citas/:id', getCita)
router.post('/citas/', createCita)
router.put('/citas/:id', updateCita)
router.delete('/citas/:id', deleteCita)

router.get('/clientes/', getAllClientes)
router.get('/clientes/:id', getCliente)

export default router
