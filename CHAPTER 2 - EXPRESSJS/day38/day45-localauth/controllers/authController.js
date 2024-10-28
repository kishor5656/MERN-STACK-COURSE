const User = require('../models/userModel');

exports.signup = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);

    try {
        const newUser = await User.create({ username, password });
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);

    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).json({
                status: 'fail',
                message: 'incorrect username or password',
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};
