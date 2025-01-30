import { DataSource } from "typeorm";
import Car from "./entities/car.entitie";




export const AppDataSource = new  DataSource({
    type:"postgres",
    host:"localhost",
    database:"postgres",
    username: "daniel_psql",
    password: "vitor158",
    synchronize:true,
    logging:false,
    entities: [Car],
    
})

