import { z } from "zod";
const multiLanguageSchema = z.object({
  en: z.string().min(3, "English title must be at least 3 characters"),
  fr: z.string().min(3, "French title must be at least 3 characters"),
  es: z.string().min(3, "Spanish title must be at least 3 characters"),
});
export const categorySchema = z.object({
  title: multiLanguageSchema,
  description: z.object({
    en: z
      .string()
      .min(10, "English description must be at least 10 characters"),
    fr: z.string().min(10, "French description must be at least 10 characters"),
    es: z
      .string()
      .min(10, "Spanish description must be at least 10 characters"),
  }),
});
export const productSchema = z.object({
  title: multiLanguageSchema,
  description: z.object({
    en: z
      .string()
      .min(10, "English description must be at least 10 characters"),
    fr: z.string().min(10, "French description must be at least 10 characters"),
    es: z
      .string()
      .min(10, "Spanish description must be at least 10 characters"),
  }),
  categoryId: z.string().min(1, "Category is required"),
  image: z.string().optional(),
});
export type CategoryFormData = z.infer<typeof categorySchema>;
export type ProductFormData = z.infer<typeof productSchema>;