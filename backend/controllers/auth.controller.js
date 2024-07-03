import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    const username = req.body.username[0];
    const password = req.body.password[0];
    try {
        // CHECK IF USERNAME ALREADY EXISTS
        const existingUser = await prisma.user.findUnique({
            where: { username }
        });

        if (existingUser) {
            return res.status(400).json({ error: 'Username already taken' });
        } else {

            // HASH THE PASSWORD
            const hashedPassword = await bcrypt.hash(password, 12);

            // CREATE A NEW USER TO SAVE TO THE DB
            const newUser = await prisma.user.create({
                data: {
                    username,
                    password: hashedPassword,
                },
            })
            
            res.status(200).json({ message: "User created succesfully" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to register!" })
    };
};

export const login = async (req, res) => {
    const username = req.body.username[0];
    const password = req.body.password[0];
    try {
        // CHECK IF USER EXISTS
        const user = await prisma.user.findUnique({
            where: { username: username }
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials!" });
        };

        // CHECK IF THE PASSWORD IS CORRECT
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid Credentials!" })
        }

        // GENERATE COOKIE TOKEN AND SEND TO THE USER
        const age = 1000 * 60 * 60 * 24 * 7  // cookie can be used for one week

        const token = jwt.sign(
            {
                id: user.id
            }, process.env.JWT_SECRET_KEY, { expiresIn: age });

        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,  // uncomment before production
            maxAge: age,
        }).status(200).json({ message: "Login Successful" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to login!" })
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("token").status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to logout!" })
    };
};