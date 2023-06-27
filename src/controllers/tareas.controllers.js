import Tarea from "../models/tarea";

export const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar las tareas",
    });
  }
};

export const crearTarea = async (req,res) => {
    try {
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({
            mensaje: 'La tarea fue creada correctamente',
        });
    } catch (error) {
        console.log(error);
    res.status(404).json({
      mensaje: "Error al crear la tarea",
    });
    }
}