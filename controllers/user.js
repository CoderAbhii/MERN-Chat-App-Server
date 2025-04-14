import { User } from '../models/user.js';

//@DESC - Create a new user and save it to the database and save in cookie
const NewUser = async (req, res) => {

    const avatar = {
        public_id: 1234,
        url: "img.freepik.avatar.jpg"
    }
    const user = await User.create({
        name: 'Chaman',
        username: 'chaman',
        password: 'chaman@123',
        avatar
    });

    res.status(201).json({
        message: 'User created successfully',
        user
    })
}

const Login = (req, res) => {
    res.send("Hello wrold");
}

export { NewUser, Login }