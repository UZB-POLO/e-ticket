import Joi from "joi";

export const createValidatorForPs = (data) => {
  const passport = Joi.object({
    jshshr: Joi.string()
      .regex(/^[0-9]{14}$/)
      .required(),
    serial_number: Joi.string()
      .regex(/^[A-Z]{2}\d{3}\d{2}\d{2}$/)
      .required(),
    customer_id: Joi.string()
      .regex(/^[0-9]{1,}$/)
      .required(),
    full_name: Joi.string().required(),
  });
  return passport.validate(data);
};

export const updateValidatorForPs = (data) => {
  const passport = Joi.object({
    jshshir: Joi.string()
      .regex(/^[0-9]{14}$/)
      .optional(),
    serialNum: Joi.string()
      .regex(/^[A-Z]{2}\d{3}\d{2}\d{2}$/)
      .optional(),
    customer_id: Joi.string()
      .regex(/^[0-9]{2,}$/)
      .optional(),
    full_name: Joi.string().optional(),
  });
  return passport.validate(data);
};
