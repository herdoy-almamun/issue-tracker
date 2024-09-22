import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string()
    .min(1)
    .max(255)
    .email({ tlds: { allow: false } })
    .required()
    .label("Email"),
  password: Joi.string().min(8).max(10000).required().label("Password"),
});
