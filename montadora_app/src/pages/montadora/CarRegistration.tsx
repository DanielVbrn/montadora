import React, { FormEvent, useEffect, useState } from 'react'
import api from '../../services/service';

interface CarRegistrationProps {
    name: string;
    brand:string;
    power:number;
    color:string;
}


const CarRegistration:React.FC = () => {
    const [dataCar, setDataCar] = useState<CarRegistrationProps>({
        name:"",
        brand:"",
        power:0,
        color:"",
    })

    useEffect(() => {
        console.log("Data car update: ", dataCar);
    }, [dataCar])

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();

        const dataToSend = api.post("/")

    }


    return (
        <div>
            <h1>Cadastro de carros</h1>
            <button onClick={() => setDataCar({
                        nome:"Daniel",
                        marca:"ssss",
                        cor:"1111",
                        potencia:9,
            })}></button>
        </div>
    )
}

export default CarRegistration