import { Router } from "express";

const router = Router();

// Mock de usuarios (simulación de DB)
let users = [
    { id: 1, name: "Ignacio", email: "ignacio@example.com" },
    { id: 2, name: "Laura", email: "laura@example.com" }
];

// Obtener todos los usuarios
router.get("/", (req, res) => {
    res.json(users);
});

// Obtener usuario por id
router.get("/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(user);
});

// Crear nuevo usuario
router.post("/", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: "Datos incompletos" });

    const newUser = {
    id: users.length + 1,
    name,
    email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Actualizar usuario por id
router.put("/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);
});

// Eliminar usuario por id
router.delete("/:id", (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).json({ error: "Usuario no encontrado" });

    users.splice(userIndex, 1);
    res.json({ message: "Usuario eliminado" });
});

export default router;
