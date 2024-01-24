import Joi from "joi";

const usernameSchema = Joi.object({
  username: Joi.string(),
});

export const validateUsernameSchema = (q) => {
  const { error, value } = usernameSchema.validate(q);

  if (error) {
    throw new Error(error.details[0].message);
  }

  return value;
};