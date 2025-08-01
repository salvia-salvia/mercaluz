import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  title: {
    en: string;
    fr: string;
    es: string;
  };
  description: {
    en: string;
    fr: string;
    es: string;
  };
  created_at: Date;
}

const CategorySchema = new Schema({
  title: {
    en: { type: String, required: true, unique: true },
    fr: { type: String, required: true, unique: true },
    es: { type: String, required: true, unique: true },
  },
  description: {
    en: { type: String, required: true },
    fr: { type: String, required: true },
    es: { type: String, required: true },
  },
  created_at: { type: Date, default: Date.now },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
