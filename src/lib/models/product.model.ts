import { Document, Schema, model, models } from "mongoose";

export interface IProduct extends Document {
  _id: string;
  title: {
    en: string;
    fr: string;
    es: string;
  };
  description?: {
    en: string;
    fr: string;
    es: string;
  };
  created_at: Date;
  category: { _id: string; name: string };
}

const ProductSchema = new Schema({
  title: {
    en: { type: String, required: true },
    fr: { type: String, required: true },
    es: { type: String, required: true },
  },
  description: {
    en: { type: String },
    fr: { type: String },
    es: { type: String },
  },
  created_at: { type: Date, default: Date.now },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
