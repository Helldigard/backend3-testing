import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routes/mocks.router.js';

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

