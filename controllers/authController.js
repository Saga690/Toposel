import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

export async function registerUser(req, res) {

    const { hash } = bcryptjs;

    try {
        const { username, email, password, fullName, gender, dob, country } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "Email already exists" });

        user = await User.findOne({ username });
        if (user) return res.status(400).json({ message: "User with a similar username already exists. Please choose a different username" });

        const hashedPassword = await hash(password, 10);

        user = new User({ username, email, password: hashedPassword, fullName, gender, dob, country });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function loginUser(req, res) {

    const { compare } = bcryptjs;

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jsonwebtoken.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user: { username: user.username, email: user.email, fullName: user.fullName, gender: user.gender, dob: user.dob, country: user.country } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
