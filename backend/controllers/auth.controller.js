import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    try {
        console.log('Called /auth/register')
        res.status(200).json({ message: "Called /auth/register" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to register!" })
    };
};

export const login = async (req, res) => {
    try {
        console.log('Called /auth/login')
        res.status(200).json({ message: "Called /auth/login" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to login!" })
    };
};

export const logout = async (req, res) => {
    try {
        console.log('Called /auth/logout')
        res.status(200).json({ message: "Called /auth/logout" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to logout!" })
    };
};