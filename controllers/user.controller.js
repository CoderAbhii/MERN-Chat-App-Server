import { compare } from 'bcryptjs';
import { User } from '../models/user.model.js';
import { cookieOptions, sendToken } from '../utils/features.js';
import { TryCatch } from '../middlewares/error.js';
import { ErrorHandler } from '../utils/utility.js';

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


//@DESC - Login user and send successfull login response and save token in cookie
const loginUserController = TryCatch(async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select('+password');

    if (!user) return next(new ErrorHandler('Invalid credentials', 400));

    const isMatch = await compare(password, user.password);

    if (!isMatch) return next(new ErrorHandler('Invalid credentials', 400));

    sendToken(res, user, 200, `Login successfully, ${user.name}`);
})

const getMyProfileController = TryCatch(async (req, res, next) => {

    const user = await User.findById(req.user);

    res.status(200).json({
        success: true,
        data: user
    })
})

const logoutUserController = TryCatch(async (req, res) => {

    return res.status(200).cookie('chatzy-token', '', { ...cookieOptions, maxAge: 0 }).json({
        success: true,
        message: 'Logged out successfully'
    })
})

const searchUserController = TryCatch(async (req, res) => {

    const { name } = req.query;

    return res.status(200).json({
        success: true,
        message: name
    })
})

export { newUserController, loginUserController, getMyProfileController, logoutUserController, searchUserController }