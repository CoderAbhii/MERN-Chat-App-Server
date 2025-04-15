import { compare } from 'bcryptjs';
import { User } from '../models/user.model.js';
import { sendToken } from '../utils/features.js';

//@DESC - Create a new user and save it to the database and save in cookie
const newUserController = async (req, res) => {

    const { name, username, password, bio } = req.body;

    const avatar = {
        public_id: 1234,
        url: "img.freepik.avatar.jpg"
    }
    const user = await User.create({
        name,
        username,
        password,
        avatar,
        bio
    });

    sendToken(res, user, 201, 'User created successfully');
}

const loginUserController = async (req, res) => {

    const { username, password } = req.body;
    const user = await User.findOne({ username }).select('+password');

    if (!user) return res.status(400).json({
        message: 'Invalid credentials'
    });

    const isMatch = await compare(password, user.password);

    if (isMatch) return res.status(400).json({
        message: 'Invalid credentials'
    });

    sendToken(res, user, 200, `Login successfully, ${user.name}`);
}

export { newUserController, loginUserController }