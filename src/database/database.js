import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    "dfqos6vb3da5lu",
    "tjxllgbcoivvop",
    "930444437d5ea9248ab298e6b6ec412f848af9bc96df2473429cb86546e49f4c",
    {
        host: '@ec2-34-234-228-127.compute-1.amazonaws.com:5432',
        dialect: 'postgres',
        port:5432,
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)