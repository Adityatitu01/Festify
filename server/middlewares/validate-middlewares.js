const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body); // Corrected typo
        req.body = parseBody;
        next();
    } catch (error) {
        const status = 422;
        const message = error.errors[0]?.message; // Correctly reference the error variable
        const errors = {
            status,
            message
        };
        console.log(errors);
        // res.status(400).json({ msg: message }); // Use the extracted message
        next(errors);
    }
};

module.exports = validate;
