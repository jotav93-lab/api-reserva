import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.PG_DB as string,
    process.env.PG_USER as string,
    process.env.PG_PASSWORD as string, 
{
    dialect: 'mysql',
    port: parseInt(process.env.PG_PORT as string)
}
);

sequelize.authenticate().then(() => {console.log('conexão com banco de dados feita com sucesso')}).catch( (err) => {
    console.log('houve um erro ao se conectar com o banco de dados: '+err)
})
