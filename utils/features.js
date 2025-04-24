import jwt from "jsonwebtoken";

const cookieOptions = {
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: 'none',
    httpOnly: true,
    secure: true
}

const sendToken = (res, user, code, message) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    return res.status(code).cookie('chatzy-token', token, cookieOptions).json({
        success: true,
        message,
    })
};

const emitEvent = (req, event, users, data) => {
    console.log('Emmiting Event', event)
}

export { sendToken, cookieOptions, emitEvent };