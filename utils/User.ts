import Joi from "joi";

export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const userSchema = Joi.object({
  firstName: Joi.string().min(1).max(255).required().label("First Name"),
  lastName: Joi.string().min(1).max(255).required().label("Last Name"),
  email: Joi.string()
    .min(1)
    .max(255)
    .email({ tlds: { allow: false } })
    .required()
    .label("Email"),
  password: Joi.string().min(8).max(10000).required().label("Password"),
});
