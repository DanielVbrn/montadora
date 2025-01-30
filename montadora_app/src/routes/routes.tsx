import { Routes,Route, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import MontadoraPage from "../pages/montadora/CarRegistration";
import CarRegistration from "../pages/montadora/CarRegistration";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {

        path: "/cadastro_montadora",
        element: <CarRegistration />
    }

]
)

export default Route;

