import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'tarea_final',
    'postgres',
    '',
    {
        host: '127.0.0.1',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)