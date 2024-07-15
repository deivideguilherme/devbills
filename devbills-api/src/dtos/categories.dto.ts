import { z } from "zod";

export const createCategorySchema = {
  title: z.string(),
  color: z.string().regex(/^#[A-Fa-f0-9]{6}$/),
};

//Dados de transição e objetos
const createCategoryObject = z.object(createCategorySchema);
export type CreateCategoryDTO = z.infer<typeof createCategoryObject>;
