import express from "express"
import cors from "cors";
import dotenv from "dotenv"
import { AppDataSource } from "./data-source";
import router from "./routes/car.route";


AppDataSource.initialize()
.then(() => console.log("Database is connecting!"))
.catch(() => console.error("Error during database initialization"))



const app = express();
const PORT = 3000;

const corsOptions = {
    origin: "http://localhost:5173",
    allowedHeaders: [
        "Content-Type",
        "Authorization"
    ],
    methods: ["POST", "GET", "PUT", "DELETE"],
};



app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", router)


app.listen(PORT, () => {
    console.log("Port is running in http://localhost:3000")
});