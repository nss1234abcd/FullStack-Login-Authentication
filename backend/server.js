require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const User = require("./models/User");

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

// Database connection
connectDB();

// Test route
app.get("/", (req, res) => {
    res.send("Login System Backend Running");
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Protected profile route
app.get("/api/profile", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({ user });

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});