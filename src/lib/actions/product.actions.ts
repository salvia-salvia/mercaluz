"use server";

import z from "zod";
import { connectToDatabase } from "../database";

import { productFormSchema } from "../validator";
 
import { handleError } from "../utils";
import Product from "../models/product.model";

export type CreateProductParams = z.infer<typeof productFormSchema>;
export const createProduct= async ({ title }: CreateProductParams) => {
  try {
    await connectToDatabase();

    const newCategory = await Product.create({ name: title });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error);
  }
};

export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const categories = await Product.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};
