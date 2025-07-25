import Joi from "joi";

export const createTransportValidator = (data) => {
  const transport = Joi.object({
    transportType: Joi.string().valid("electronical", "mechanical").required(),
    class: Joi.string()
      .valid("car", "bus", "truck", "bicycle", "motorcycle", "train", "plane")
      .required(),
    seat: Joi.number().required(),
  });
  return transport.validate(data, { abortEarly: false });
};
export const updateTransportValidator = (data) => {
  const transport = Joi.object({
    transportType: Joi.string().valid("electronical", "mechanical").optional(),
    class: Joi.string()
      .valid("car", "bus", "truck", "bicycle", "motorcycle", "train", "plane")
      .optional(),
    seat: Joi.number().optional(),
  });
  return transport.validate(data, { abortEarly: false });
};
