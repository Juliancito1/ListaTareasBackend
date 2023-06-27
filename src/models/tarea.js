import { Schema , model } from "mongoose";

const tareaSchema = new Schema({
    tarea:{
        type: String,
        minLength: 3,
        maxLength: 100,
        unique: true,
        required: true,
        match: /^[A-Za-z0-9\s]{3,100}$/
    }
})

const Tarea = model('tarea', tareaSchema);

export default Tarea;