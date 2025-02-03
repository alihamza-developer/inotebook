import express from "express";
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import { verifyUser } from "../middleware/auth.js";

const router = express.Router();

// Register
router.post("/register", [
    body("name").notEmpty().trim(),
    body("email").isEmail().notEmpty().trim(),
    body("password").isLength({ min: 6 }),
], async (req, res) => {

    const errors = validationResult(req),
        { name, email, password } = req.body;

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });



    // Check is Exists 
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({
        status: "error",
        data: "User already exists with this email"
    });

    try {
        let user = await User.create({
            name,
            email,
            password: await bcrypt.hash(password, 10)
        });

        // Generate Token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);


        // Send Response
        return res.status(200).json({
            status: "success",
            token,
            data: "User registered successfully!"
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: "error",
            data: "Something went wrong, Please try again later"
        });
    }

});

// Login
router.post("/login", [
    body("email").isEmail().notEmpty().trim(),
    body("password").notEmpty(),
], async (req, res) => {

    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    // Check is Exists
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({
        status: "error",
        data: "Invalid credentials"
    });

    // Check Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({
        status: "error",
        data: "Invalid password!"
    });

    // Generate Token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);


    // Send Response
    return res.status(200).json({
        status: "success",
        token,
        data: "User logged in successfully!"
    });
});


// Get User
router.get("/getuser", verifyUser, async (req, res) => {
    let { id } = req.user,
        user = await User.findById(id).select("-password -_id -__v");

    res.status(200).json({
        status: "success",
        data: user
    });
});

export default router;