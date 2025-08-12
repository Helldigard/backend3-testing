import { Router } from 'express';
import { generateMockingUsers, generateMockingPets } from '../utils/mocking.js';
import { UserModel } from '../models/user.model.js';
import { PetModel } from '../models/pet.model.js';

const router = Router();

//mockingpets
router.get('/mockingpets', (req, res) => {
    const pets = generateMockingPets(10);
    res.json({ status: 'success', payload: pets });
});

//genera 50 usuarios
router.get('/mockingusers', (req, res) => {
    const users = generateMockingUsers(50);
    res.json({ status: 'success', payload: users });
});

//genera e inserta en BD
router.post('/generateData', async (req, res) => {
    try {
        const { users = 0, pets = 0 } = req.body;

        const mockUsers = generateMockingUsers(users);
        const mockPets = generateMockingPets(pets);

        await UserModel.insertMany(mockUsers);
        await PetModel.insertMany(mockPets);

        res.json({
            status: 'success',
            message: `${users} usuarios y ${pets} mascotas insertadas correctamente`
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

export default router;
