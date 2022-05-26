//importamos base de datos
import  Turns  from '../models/Turns.js';


const createTurn = async (req, res) => {
    const { title, description, TurnDate, TurnTime} = req.body;
    const turn = new Turns({ title, description, completed: false, TurnDate, TurnTime });
    await turn.save(); 

    res.json({turn});
}
const getTurns = async (req, res) => {
    const turns = await Turns.find();
    res.json(turns);

}
const deleteTurn = async (req, res) => {
    const _id = req.params.id;
    await Turns.remove( { _id });
    res.json({ message: 'turn deleted' });


}
const completeTurn = async (req, res) => {
    
    const {id} = req.params;
    const turn = await Turns.findById(id);
    turn.completed = !turn.completed;
    console.log(turn.completed);
    await turn.save();
    res.json({ message: 'turn completed' });
}



export {
    createTurn,
    getTurns,
    deleteTurn,
    completeTurn
}