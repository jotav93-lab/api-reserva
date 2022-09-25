import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface PhraseInstance extends Model {    
    
    id: string;
    author: string;
    txt:string;
    telefone:number;
}

export const Phrase = sequelize.define<PhraseInstance>('Phrases', {
    id: {
        primaryKey:true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author:{
        type: DataTypes.STRING
    },
    txt:{
       type: DataTypes.STRING
    },
    telefone:{
        type: DataTypes.STRING
    }
}, {
    tableName: 'phrase',
    timestamps: false
})
