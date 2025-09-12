// models/pet.model.js
import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    name: String,
    type: String,
    adopted: Boolean
});

export const PetModel = mongoose.model('Pet', petSchema);