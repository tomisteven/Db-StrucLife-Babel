import {Schema, model} from 'mongoose';


const CompraSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    items : [{
        product: {
            type: String
        }, 
        cantidad: {
            type: Number
        }
    }],
    completed: {
        type: Boolean,
        default: false
    }
});


export default model('Compra', CompraSchema);