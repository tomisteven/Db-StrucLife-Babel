import {Schema, model} from 'mongoose';


const IdeaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});


export default model('Idea', IdeaSchema);

    