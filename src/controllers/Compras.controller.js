import Compra from "../models/Compra";

const createCompra = async (req, res) => {
    try {
        const { nombre, items } = req.body;
    const compra = new Compra({ nombre, items });
    await compra.save();
    res.json(compra);
    } catch (error) {
        console.log(error);
    }
}

const addItemCompra = async (req, res) => {
    try {
        
        const { id } = req.params;
        const { product, cantidad } = req.body;
        const compra = await Compra.findById(id);
        compra.items.push({ product, cantidad });
        await compra.save();
        res.json(compra.items);
    } catch (error) {
        console.log(error);
    }
}
const deleteItemCompra = async (req, res) => {
    try {
        
        const { id_compra, id_product} = req.params;
        const compra = await Compra.findById(id_compra)
        compra.items.remove({ _id: id_product });
        //compra.items = removeItem;
        await compra.save();
        res.json(compra);
    } catch (error) {
        console.log(error);
    }
}

const getCompras = async (req, res) => {
    const compras = await Compra.find();
    res.json(compras);
}


const deleteCompra = async (req, res) => {
    const _id = req.params.id;
    await Compra.remove({ _id });
    res.json({ message: "Compra deleted" });
}

const compraComplete = async (req, res) => {
    const {id} = req.params;
    const compra = await Compra.findById(id);
    compra.completed = !compra.completed;
    console.log(compra.completed);
    await compra.save();
    res.json({ message: 'Task completed' });
}


export {
    createCompra,
    getCompras,
    deleteItemCompra,
    deleteCompra,
    compraComplete,
    addItemCompra
}