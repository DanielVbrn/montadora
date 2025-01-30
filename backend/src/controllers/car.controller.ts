import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Car from "../entities/car.entitie"; 

class CarController {
  
  static async createCar(req: Request, res: Response) {
    try {
      const { name_car, brand, power, color } = req.body;
      const carRepository = AppDataSource.getRepository(Car);

      const newCar = carRepository.create({ name_car, brand, power, color });
      await carRepository.save(newCar);

      res.status(201).json({ message: "Carro cadastrado com sucesso!", car: newCar });
    } catch (error) {
      res.status(500).json({ message: "Erro ao cadastrar carro", error });
    }
  }

  static async getAllCars(req: Request, res: Response) {
    try {
      const carRepository = AppDataSource.getRepository(Car);
      const cars = await carRepository.find();
      res.json(cars);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar carros", error });
    }
  }

  static async getCarById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const carRepository = AppDataSource.getRepository(Car);
      const car = await carRepository.findOneBy({ id: Number(id) });

      if (!car) {
        res.status(404).json({ message: "Carro não encontrado" });
      }

      res.json(car);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar carro", error });
    }
  }

  static async updateCar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name_car, brand, power, color } = req.body;
      const carRepository = AppDataSource.getRepository(Car);

      const car = await carRepository.findOneBy({ id: Number(id) }) as Car;

      if (!car) {
        res.status(404).json({ message: "Carro não encontrado" });
      }

      carRepository.merge(car, { name_car, brand, power, color });
      const updatedCar = await carRepository.save(car);

      res.json({ message: "Carro atualizado com sucesso!", car: updatedCar });
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar carro", error });
    }
  }

  static async deleteCar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const carRepository = AppDataSource.getRepository(Car);

      const car = await carRepository.findOneBy({ id: Number(id) })  as Car;

      if (!car) {
        res.status(404).json({ message: "Carro não encontrado" });
      }

      await carRepository.remove(car);
      res.json({ message: "Carro removido com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar carro", error });
    }
  }
}

export default CarController;
