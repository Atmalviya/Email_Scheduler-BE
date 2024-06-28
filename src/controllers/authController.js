const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = new User({ email, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
};

exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const cookieOptions = {
            secure: false,
            httpOnly: true,
            sameSite: 'None',
            maxAge: 3600000 // 1 hour
        };

        res.cookie('token', token, cookieOptions);
        res.status(200).json({ message: 'Signed in successfully', success: true, token });
    } catch (error) {
        console.error('Error during sign in:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.islogin = (req, res) => {
    try {
        res.status(200).json({ message: 'User is logged in', status: true });
    } catch (err) {
        res.status(400).json({ message: 'User is not logged in', status: false });
    }
};
