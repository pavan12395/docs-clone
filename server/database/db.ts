import {Sequelize} from "sequelize";

const database:string = "docs"
const username:string = "root"
const password:string = "190905112"
const host:string = "127.0.0.1"
export const sequelize = new Sequelize(
 database,
 username,
 password,
  {
    host: host,
    dialect: 'mysql'
  }
);

export function ConnectDB()
{
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error: any) => {
        console.error('Unable to connect to the database: ', error);
     });
}