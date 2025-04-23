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


//@DESC - Login user and send successfull login response and save token in cookie
const loginUserController = TryCatch(async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select('+password');

    if (!user) return next(new Error('Invalid credentials'));

    const isMatch = await compare(password, user.password);

    if (!isMatch) return next(new Error('Invalid credentials'));

    sendToken(res, user, 200, `Login successfully, ${user.name}`);
})

const getMyProfile = async (req, res) => {

}

export { newUserController, loginUserController, getMyProfile }