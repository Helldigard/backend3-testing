import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './src/routes/mocks.router.js';
import { swaggerUi, swaggerSpecs } from "./src/config/swagger.js";
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.use(express.json());

// conexión a Mongo
mongoose.connect('mongodb://localhost:27017/testing', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error en MongoDB:', err));

app.use('/api/mocks', mocksRouter);
app.listen(8080, () => {
    console.log('Servidor en puerto 8080');
});

// swagger docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.get("/", (req, res) => {
    res.send("Todo en oden");
});

export default app;
