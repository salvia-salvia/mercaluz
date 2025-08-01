import { Category, MultiLanguageField, Product } from "@/types";
import { useState, useCallback } from "react";

// Mock data
const createMultiLangField = (
  en: string,
  fr: string,
  es: string
): MultiLanguageField => ({
  en,
  fr,
  es,
});

const mockCategories: Category[] = [
  {
    id: "1",
    title: createMultiLangField("Electronics", "Électronique", "Electrónicos"),
    description: createMultiLangField(
      "Electronic devices and gadgets",
      "Appareils et gadgets électroniques",
      "Dispositivos y gadgets electrónicos"
    ),
    created_at: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: createMultiLangField("Clothing", "Vêtements", "Ropa"),
    description: createMultiLangField(
      "Fashion and clothing items",
      "Articles de mode et vêtements",
      "Artículos de moda y ropa"
    ),
    created_at: new Date("2024-01-20"),
  },
];

const mockProducts: Product[] = [
  {
    id: "1",
    title: createMultiLangField(
      "Smartphone Pro",
      "Smartphone Pro",
      "Smartphone Pro"
    ),
    description: createMultiLangField(
      "Latest smartphone with advanced features",
      "Dernier smartphone avec des fonctionnalités avancées",
      "Último smartphone con características avanzadas"
    ),
    categoryId: "1",
    price: 699.99,
    created_at: new Date("2024-01-25"),
  },
  {
    id: "2",
    title: createMultiLangField(
      "Cotton T-Shirt",
      "T-shirt en Coton",
      "Camiseta de Algodón"
    ),
    description: createMultiLangField(
      "Comfortable cotton t-shirt in various colors",
      "T-shirt en coton confortable en plusieurs couleurs",
      "Camiseta de algodón cómoda en varios colores"
    ),
    categoryId: "2",
    price: 24.99,
    created_at: new Date("2024-01-30"),
  },
];

export const useAdminData = () => {
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [products, setProducts] = useState<Product[]>(mockProducts);

  const createCategory = useCallback(
    (categoryData: Omit<Category, "id" | "created_at">) => {
      const newCategory: Category = {
        ...categoryData,
        id: Date.now().toString(),
        created_at: new Date(),
      };
      setCategories((prev) => [...prev, newCategory]);
      return newCategory;
    },
    []
  );

  const updateCategory = useCallback(
    (id: string, categoryData: Omit<Category, "id" | "created_at">) => {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === id
            ? { ...cat, ...categoryData, updatedAt: new Date() }
            : cat
        )
      );
    },
    []
  );

  const deleteCategory = useCallback((id: string) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
    // Also remove products in this category
    setProducts((prev) => prev.filter((prod) => prod.categoryId !== id));
  }, []);

  const createProduct = useCallback(
    (productData: Omit<Product, "id" | "created_at">) => {
      const newProduct: Product = {
        ...productData,
        id: Date.now().toString(),
        created_at: new Date(),
      };
      setProducts((prev) => [...prev, newProduct]);
      return newProduct;
    },
    []
  );

  const updateProduct = useCallback(
    (id: string, productData: Omit<Product, "id" | "created_at">) => {
      setProducts((prev) =>
        prev.map((prod) =>
          prod.id === id
            ? { ...prod, ...productData, updatedAt: new Date() }
            : prod
        )
      );
    },
    []
  );

  const deleteProduct = useCallback((id: string) => {
    setProducts((prev) => prev.filter((prod) => prod.id !== id));
  }, []);

  return {
    categories,
    products,
    createCategory,
    updateCategory,
    deleteCategory,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};
