import api from "./service";

const API_URL = "/api/cars"; 

export interface Car {
  id?: number;
  name_car: string;
  brand: string;
  power: string;
  color: string;
}

export const getCars = async (): Promise<Car[]> => {
  const response = await api.get<Car[]>(API_URL);
  return response.data;
};

export const createCar = async (carData: FormData): Promise<Car> => {
  const response = await api.post<Car>(API_URL, carData);
  return response.data;
};

export const updateCar = async (id: number, carData: FormData): Promise<Car> => {
  const response = await api.put<Car>(`${API_URL}/${id}`, carData);
  return response.data;
};
