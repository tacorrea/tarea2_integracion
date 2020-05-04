const Ingrediente = require('../models').default.Ingrediente;
//import Ingrediente from '../models/Ingrediente'

export async function getIngrediente(req, res){
    try{
        const ingredientes = await Ingrediente.findAll({
            attributes: ['id', 'nombre', 'descripcion'],
        });
        res.json({
        data: ingredientes
    });
    }catch(e){
        console.log(e);
    }
};

export async function createIngrediente(req, res){
    const {id, nombre, descripcion} = req.body;
    try{
        let newIngrediente = await Ingrediente.create({
            id,
            nombre,
            descripcion
        }, {
            fields: ['id', 'nombre', 'descripcion']
        });
        if (newIngrediente){
            return res.json({
                message: 'Ingrediente created successfully',
                data: newIngrediente
            });
        }
    }catch (e){
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
    console.log(req.body);
    
};

export async function getOneIngrediente(req, res){
    const { id } = req.params;
    const ingrediente = await Ingrediente.findOne({
        where: {
            id:id
        },
        attributes: ['id', 'nombre', 'descripcion']
    });
    res.json({
        data: ingrediente
    });
}

export async function deleteIngrediente(req, res){
    const { id } = req.params;
    const deleteRowCount = await Ingrediente.destroy({
        where: {
            id:id
        }
    });
    res.json({
        message: 'Ingrediente Deleted',
        count: deleteRowCount
    });
}



