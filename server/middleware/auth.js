import jwt from 'jsonwebtoken';

async function verifyUser(req, res, next) {

    const token = req.header("auth-token");
    if (!token) {
        return res.status(400).json({
            status: "error",
            data: "auth-token is required"
        });
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(400).json({
            status: "error",
            data: "Something went wrong, Please try again later"
        });
    }
}


export {
    verifyUser
}