import { Router } from "express";
import {
  borrarTarea,
  crearTarea,
  editarTarea,
  obtenerTarea,
  obtenerTareas,
} from "../controllers/tareas.controllers";

const router = Router();

// app.get('/apitareas', (req,res)=>{
//     res.send('Esto es una prueba de la peticion get')
// })

router.route("/tareas").get(obtenerTareas).post(crearTarea);
router
  .route("/tareas/:id")
  .delete(borrarTarea)
  .put(editarTarea)
  .get(obtenerTarea);
export default router;
