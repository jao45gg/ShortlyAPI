import joi from "joi";

const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required().min(3),
    confirmPassword: joi.string().required().min(3)
});

export default signUpSchema;