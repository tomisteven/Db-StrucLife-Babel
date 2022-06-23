//importamos base de datos
import  Study  from '../models/Study.js';

 
const createStudy = async (req, res) => {
    const { materia, tiempoEstimado, porcentajeAvance, finalizado } = req.body;
    const study = new Study({  materia, tiempoEstimado, porcentajeAvance, finalizado });
    await study.save(); 

    res.json({ message: 'study saved', study: study });
}
const getStudyes = async (req, res) => {
try {
    const Studyy = await Study.find();
    res.json({ message: 'studies found', studies: Studyy });
    
} catch (error) {
    console.log(error);
}

}
const deleteStudy = async (req, res) => {
    const _id = req.params.id;
    await Study.remove( { _id });
    res.json({ message: 'Study deleted' });


}
const finaliceStudy = async (req, res) => {
    
    const {id} = req.params;
    const study = await Study.findById(id);
    study.finalizado = !study.finalizado;
    
    await study.save();
    res.json({ message: 'study completed' });
}

const editStudy = async (req, res) => {
    const { id } = req.params;
    const {porcentajeAvance} = req.body;
    const study = await Study.findById(id);
    study.porcentajeAvance = porcentajeAvance;  //actualizamos el porcentaje de avance
    await study.save();
    res.json({ message: 'study updated' });
}



export {
    createStudy,
    getStudyes,
    deleteStudy,
    finaliceStudy,
    editStudy
}