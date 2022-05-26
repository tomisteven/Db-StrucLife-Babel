import {Schema, model} from 'mongoose';


const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
});


export default model('Task', TaskSchema);

    