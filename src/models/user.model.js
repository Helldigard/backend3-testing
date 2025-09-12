// models/user.model.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    role: String,
    pets: Array
});

export const UserModel = mongoose.model('User', userSchema);


