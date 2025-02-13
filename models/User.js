import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true, set: (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() },
    dob: { type: Date, required: true },
    country: { type: String, required: true },
}, { timestamps: true });

export default model("User", UserSchema);