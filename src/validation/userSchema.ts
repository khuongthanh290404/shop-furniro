import z from "zod";
export const userValidation = () => {
  const userSchema = z.object({
    username: z.string().min(6),
    phone: z.string().min(10),
    email: z.string().email(),
    password: z.string().min(3),
  });
  return {
    userSchema,
  };
};
