import { Sequelize } from 'sequelize';
import connetedDB from '../Config/database.js';

const { DataTypes } = Sequelize;

const book = connetedDB.define('books',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true
    },
    code:{
        type:DataTypes.STRING
    },
    title:{
        type: DataTypes.STRING
    },
    author:{
        type: DataTypes.STRING
    },
    stock:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});

export default book;