import User from "../models/User.js";

export async function searchUser(req, res) {
    try {

        const query = {};

        if (req.query.username) query.username = req.query.username;
        if (req.query.email) query.email = req.query.email;

        const user = await User.findOne(query).select("-password -createdAt -updatedAt -__v");

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
