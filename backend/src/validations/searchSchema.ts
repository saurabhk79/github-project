import Joi from "joi";

const searchSchema = Joi.object({
  username: Joi.string(),
  location: Joi.string(),
});

export const validateSearchSchema = (q) => {
  const { error, value } = searchSchema.validate(q);

  if (error) {
    throw new Error(error.details[0].message);
  }

  return value;
};
