"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Category, Language } from "@/types";
import { MultiLanguageForm } from "./MultiLanguageForm";
import { CategoryFormData, categorySchema } from "@/lib/validator";

interface CategoryFormProps {
  category?: Category | null;
  onSubmit: (data: CategoryFormData) => void;
  onCancel: () => void;
}

export function CategoryForm({
  category,
  onSubmit,
  onCancel,
}: CategoryFormProps) {
  const [formData, setFormData] = useState<CategoryFormData>();
  const [errors, setErrors] = useState<{
    title?: Partial<Record<Language, string>>;
    description?: Partial<Record<Language, string>>;
  }>({});

  useEffect(() => {
    if (category) {
      setFormData({
        title: category?.title,
        description: category?.description,
      });
    }
  }, [category]);

  const handleTitleChange = (lang: Language, value: string) => {

    setFormData((prev) => {
      if (!prev) {
        return {
          title: {
            en: lang === "en" ? value : "",
            fr: lang === "fr" ? value : "",
            es: lang === "es" ? value : "",
          },
          description: {
            en: "",
            fr: "",
            es: "",
          },
        };
      } else {
        return {
          ...prev,
          title: {
            ...prev.title,
            [lang]: value,
          },
        };
      }
    });

    // Clear error for this field
    if (errors.title?.[lang]) {
      setErrors((prev) => ({
        ...prev,
        title: { ...prev.title, [lang]: undefined },
      }));
    }
  };

  const handleDescriptionChange = (lang: Language, value: string) => {
    setFormData((prev) => {
      if (!prev) {
        return {
          description: {
            en: lang === "en" ? value : "",
            fr: lang === "fr" ? value : "",
            es: lang === "es" ? value : "",
          },
          title: {
            en: "",
            fr: "",
            es: "",
          },
        };
      } else {
        return {
          ...prev,
          description: {
            ...prev.description,
            [lang]: value,
          },
        };
      }
    });

    // Clear error for this field
    if (errors.description?.[lang]) {
      setErrors((prev) => ({
        ...prev,
        description: { ...prev.description, [lang]: undefined },
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    try {
      const validatedData = categorySchema.parse(formData);
      onSubmit(validatedData);
      setErrors({});
    } catch (error: any) {
      if (error.errors) {
        const newErrors: typeof errors = {};

        error.errors.forEach((err: any) => {
          const path = err.path;
          if (path[0] === "title" && path[1]) {
            if (!newErrors.title) newErrors.title = {};
            newErrors.title[path[1] as Language] = err.message;
          } else if (path[0] === "description" && path[1]) {
            if (!newErrors.description) newErrors.description = {};
            newErrors.description[path[1] as Language] = err.message;
          }
        });

        setErrors(newErrors);
        // toast({
        //   title: "Validation Error",
        //   description: "Please check the form for errors.",
        //   variant: "destructive",
        // });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <MultiLanguageForm
        titleValue={formData?.title}
        descriptionValue={formData?.description}
        onTitleChange={handleTitleChange}
        onDescriptionChange={handleDescriptionChange}
        titleErrors={errors.title}
        descriptionErrors={errors.description}
      />

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{category ? "Update" : "Create"} Category</Button>
      </div>
    </form>
  );
}
