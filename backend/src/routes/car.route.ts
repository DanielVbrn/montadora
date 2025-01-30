import { Router } from "express";
import CarController from "../controllers/car.controller";

const router = Router();

router.post("/cars", CarController.createCar);
router.get("/cars", CarController.getAllCars);
router.get("/cars/:id", CarController.getCarById);
router.put("/cars/:id", CarController.updateCar);
router.delete("/cars/:id", CarController.deleteCar);

export default router;
