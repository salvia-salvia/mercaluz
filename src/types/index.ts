export interface MultiLanguageField {
  en: string;
  fr: string;
  es: string;
}

export interface Category {
  id: string;
  title: MultiLanguageField;
  description: MultiLanguageField;
  created_at: Date;
}

export interface Product {
  id: string;
  title: MultiLanguageField;
  description: MultiLanguageField;
  categoryId: string;
  price: number;
  image?: string;
  created_at: Date;
}

export type Language = "en" | "fr" | "es";

export const LANGUAGES = {
  en: "English",
  fr: "Français",
  es: "Español",
} as const;

export const LANGUAGE_FLAGS = {
  en: "🇺🇸",
  fr: "🇫🇷",
  es: "🇪🇸",
} as const;
export type MultiLangText = {
  en: string;
  fr: string;
  es: string;
};
export type Categories =  "cephalopod" | "pelagic" | "demersal";