import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './src/routes/mocks.router.js';
import { swaggerUi, swaggerSpecs } from "./src/config/swagger.js";
import dotenv from "dotenv";
import adoptionRouter from "./src/routes/adoption.router.js";
import usersRouter from './routes/users.router.js'

dotenv.config();

const app = express();
app.use(express.json());

// conexión a Mongo (usa env o fallback a localhost)
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/testing";

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Conectado a MongoDB en ${MONGO_URL}`))
.catch(err => console.error('Error en MongoDB:', err));

app.use('/api/mocks', mocksRouter);

// swagger docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.get("/", (req, res) => {
    res.send("Todo en orden");
});

// adoptions test
app.use("/api/adoptions", adoptionRouter);

app.listen(8080, () => {
    console.log('Servidor en puerto 8080');
});
// users.router
app.use('/api/users', usersRouter)

export default app;

