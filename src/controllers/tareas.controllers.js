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

export const borrarTarea = async (req, res) => {
  try {
    //obtener el id y luego solicitar a mongoose el borrar
    console.log(req.params.id);
    await Tarea.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "La tarea fue eliminada",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "La tarea no pudo ser eliminada",
    });
  }
};

export const editarTarea = async (req, res) => {
  try {
    //extraer  el id del request y el body
    await Tarea.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "La tarea fue actualizada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "La tarea no pudo ser actualizada",
    });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id);
    res.status(200).json(tarea);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo obtener la tarea buscada",
    });
  }
};
