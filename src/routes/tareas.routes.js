import { Router } from "express"
import { crearTarea, obtenerTareas } from "../controllers/tareas.controllers"


const router = Router()

// app.get('/apitareas', (req,res)=>{
//     res.send('Esto es una prueba de la peticion get')
// })

router.route('/tareas').get(obtenerTareas).post(crearTarea)

export default router