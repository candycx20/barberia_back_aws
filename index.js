import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

/* app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
}) */

app.listen(9000, ()=>{
    console.log('Server UP running in http://localhost:9000/')
})