import { Router } from "express";

const router = Router();

let adoptions = []; 

router.get("/", (req, res) => {
    res.status(200).json(adoptions);
});

router.post("/", (req, res) => {
    const { petId, userId } = req.body;

    if (!petId || !userId) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    const newAdoption = {
        _id: String(adoptions.length + 1),
        petId,
        userId,
    };

    adoptions.push(newAdoption);
    res.status(201).json(newAdoption);
});

export default router;
