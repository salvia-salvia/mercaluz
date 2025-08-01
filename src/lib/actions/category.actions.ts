"use server";

import z from "zod";
import { connectToDatabase } from "../database";

import Category from "../models/category.model";
import { handleError } from "../utils";
import { CategoryFormData } from "../validator";

 
export const createCategory = async ({ title }: CategoryFormData) => {
  try {
    await connectToDatabase();

    const newCategory = await Category.create({ name: title });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error);
  }
};

export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const categories = await Category.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};
