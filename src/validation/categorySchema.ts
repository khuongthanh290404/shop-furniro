import z from "zod";

export const categoryValidation = () => {
  const categorySchema = z.object({
    name: z.string().min(8),
  });
  return {
    categorySchema,
  };
};
