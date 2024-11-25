const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    console.log("Token:", token);

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized. No token provided."
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized. Invalid token."
        });
    }
};

module.exports = authMiddleware; 