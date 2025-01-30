import { DataSource } from "typeorm";
import Car from "./entities/car.entitie";
import dotenv from "dotenv"


dotenv.config();


const name_user = process.env.NAME_USER
const password = process.env.PASSWORD


export const AppDataSource = new  DataSource({
    type:"postgres",
    host:"localhost",
    database:"postgres",
    username: name_user,
    password: password,
    synchronize:true,
    logging:false,
    entities: [Car],
    
})

