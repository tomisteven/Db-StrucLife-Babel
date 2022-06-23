//importamos base de datos
import  Idea  from '../models/Idea.js';


const createIdea = async (req, res) => {
    const { title, description } = req.body;
    const idea = new Idea({ title, description});
    await idea.save(); 

    res.json({ message: 'idea saved', idea });
}
const getIdea = async (req, res) => {
    const ideas = await Idea.find();
    res.json(ideas);

}
const deleteIdea = async (req, res) => {
    const _id = req.params.id;
    await Idea.remove( { _id });
    res.json({ message: 'Idea deleted' });
}

export {
    createIdea,
    getIdea,
    deleteIdea
}