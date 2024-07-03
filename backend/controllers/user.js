const User = require("../models/userSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: 'Invalid data',
                success: false
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: 'Invalid Email or password',
                success: false
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: false
            });
        }

        const token = await jwt.sign({ userId: user._id }, "qwertyujuytrewqw", { expiresIn: '1d' });

        return res.status(200).cookie('token', token, { httpOnly: false }).json({
            message: `Welcome back ${user.Fullname}`,
            success: true,
            user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred",
            success: false
        });
    }
}

const Logout = async (req, res) => {
    return res.status(200).cookie('token', "", { expires: new Date(Date.now()), httpOnly: true }).json({
        message: 'User Logged out successfully', 
        success: true
    });
}

const Register = async (req, res) => {
    try {
        const { Fullname, email, password } = req.body;
       

        if (!Fullname || !email || !password) {
            return res.status(400).json({
                message: "Invalid Data",
                success: false
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({
                message: "This email is already used",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            Fullname,
            email,
            password: hashedPassword
        });

        return res.status(200).json({
            message: 'User created Successfully!',
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred",
            success: false
        });
    }
}

module.exports = { Login, Register, Logout };
