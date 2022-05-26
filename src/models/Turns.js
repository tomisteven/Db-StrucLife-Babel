import {Schema, model} from 'mongoose';


const TurnSchema = new Schema({
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
    Date: {
        type: Date,
        default: Date.now()
    },
    TurnDate: {
        type: String,
        
    },
    TurnTime: {
        type: String,
        
    }
});


export default model('Turn', TurnSchema);

    