const Hamburguesa = require('../models').Hamburguesa;

export async function getHamburguesa(req, res){
    try{
        const hamburguesa = await Hamburguesa.findAll({
            include: ["ingredientes"]
        });
        res.json({
        data: hamburguesa
    });
    }catch(e){
        console.log(e);
    }
};

export async function createHamburguesa(req, res){
    const {id, nombre, precio, descripcion, imagen} = req.body;
    try{
        var newHamburguesa = await Hamburguesa.create({
            id,
            nombre,
            precio,
            descripcion,
            imagen
        }, {
            fields: ['id', 'nombre', 'precio', 'descripcion', 'imagen']
        });
        if (newHamburguesa){
            return res.json({
                message: 'Hamburguesa created successfully',
                data: newHamburguesa
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

export async function getOneHamburguesa(req, res){
    const { id } = req.params;
    const hamburguesa = await Hamburguesa.findOne({
        where: {
            id:id
        }
    });
    res.json({
        data: hamburguesa
    });
}

export async function deleteHamburguesa(req, res){
    const { id } = req.params;
    const deleteRowCount = await Hamburguesa.destroy({
        where: {
            id:id
        }
    });
    res.json({
        message: 'Hamburguesa Deleted',
        count: deleteRowCount
    });
}

export async function updateHamburguesa(req, res){
    const { id } = req.params;
    const {nombre, precio, descripcion, imagen} = req.body;
    const hamburguesas = await Hamburguesa.findAll({
        attributes: ['id', 'nombre', 'precio', 'descripcion', 'imagen'],
        where:{
            id:id
        }
    });
    if(hamburguesas.length > 0){
        hamburguesas.forEach(async hamburguesa => {
            await hamburguesa.update({
                nombre,
                precio,
                descripcion,
                imagen
            });
        })
    }
    return res.json({
        message: 'Project updated Successfully',
        data: hamburguesas
    });
    
}
