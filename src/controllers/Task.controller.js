//importamos base de datos
import  Task  from '../models/Task.js';


const createTask = async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description, completed: false });
    await task.save(); 

    res.json({ message: 'Task saved', task });
}
const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);

}
const deleteTask = async (req, res) => {
    const _id = req.params.id;
    await Task.remove( { _id });
    res.json({ message: 'Task deleted' });


}
const completeTask = async (req, res) => {
    
    const {id} = req.params;
    const task = await Task.findById(id);
    task.completed = !task.completed;
    console.log(task.completed);
    await task.save();
    res.json({ message: 'Task completed' });
}



export {
    createTask,
    getTasks,
    deleteTask,
    completeTask
    
}