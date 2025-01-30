import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity() 
class Car {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name_car!:string

    @Column()
    brand!:string
    

    @Column()
    power!:number

    @Column()
    color!:string


}

export default Car;