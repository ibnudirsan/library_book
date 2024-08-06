import { Sequelize } from 'sequelize';
import connetedDB from '../Config/database.js';

const { DataTypes } = Sequelize;

const member = connetedDB.define('members',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true
    },
    code:{
        type:DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default member;