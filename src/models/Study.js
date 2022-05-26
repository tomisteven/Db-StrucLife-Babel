import {Schema, model} from 'mongoose';

const Study = new Schema({
    materia: {
        type: String,
        required: true
    },
    tiempoEstimado: {
        type: Number,
        required: true
    },
    porcentajeAvance: {
        type: Number,
        required: true
    },
    finalizado: {
        type: Boolean,
        required: true,
        default: false
    }

});

export default model('Study', Study);