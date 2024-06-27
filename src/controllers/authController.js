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
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const cookieOptions = {
        httpOnly: true,
        sameSite: 'None',
    };
    res.cookie('token', token, cookieOptions);
    res.status(200).json({ message: 'Signed in successfully', success: true});
};

exports.signOut = (req, res) => {
    res.cookie('token', '', { httpOnly: true, expires: new Date(0) });
    res.status(200).json({ message: 'Signed out successfully' });
};

exports.islogin = async (req, res) => {
    try {
        const token = req.cookies.token;
        console.log(token)
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log(verified)
        req.user = verified;
        res.status(200).json({ message: 'User is logged in', status : true });
    } catch (err) {
        res.status(400).json({ message: 'User is not logged in', status : false});
    }
};