import * as yup from "yup";

export const validationSchema = yup.object({
  model: yup.string().required(),
  brand: yup.string().required(),
  type: yup.string().required(),
  price: yup.number().required().moreThan(100),
  stock: yup.number().required().min(0),
  description: yup.string().required(),
  file: yup.mixed().when("imageUrl", {
    is: (value: string) => !value,
    then: (schema) => schema.required("Image is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});
