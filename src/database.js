import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://admin:admin123@structlife-cluster.jh1ls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
})




