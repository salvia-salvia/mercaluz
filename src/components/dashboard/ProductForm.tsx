import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MultiLanguageForm } from './MultiLanguageForm';
import { Product, Category, Language } from '@/types';
import { productSchema, ProductFormData } from '@/lib/validation';
 

interface ProductFormProps {
  product?: Product | null;
  categories: Category[];
  onSubmit: (data: ProductFormData & { price: number; categoryId: string; image?: string }) => void;
  onCancel: () => void;
}

export function ProductForm({ product, categories, onSubmit, onCancel }: ProductFormProps) {
 
  const [formData, setFormData] = useState({
    title: { en: '', fr: '', es: '' },
    description: { en: '', fr: '', es: '' },
    categoryId: '',
    price: 0,
    image: ''
  });
  const [errors, setErrors] = useState<{
    title?: Partial<Record<Language, string>>;
    description?: Partial<Record<Language, string>>;
    categoryId?: string;
    price?: string;
  }>({});

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        description: product.description,
        categoryId: product.categoryId,
        price: product.price,
        image: product.image || ''
      });
    }
  }, [product]);

  const handleTitleChange = (lang: Language, value: string) => {
    setFormData(prev => ({
      ...prev,
      title: { ...prev.title, [lang]: value }
    }));
    
    if (errors.title?.[lang]) {
      setErrors(prev => ({
        ...prev,
        title: { ...prev.title, [lang]: undefined }
      }));
    }
  };

  const handleDescriptionChange = (lang: Language, value: string) => {
    setFormData(prev => ({
      ...prev,
      description: { ...prev.description, [lang]: value }
    }));
    
    if (errors.description?.[lang]) {
      setErrors(prev => ({
        ...prev,
        description: { ...prev.description, [lang]: undefined }
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = productSchema.parse(formData);
      onSubmit({
        ...validatedData,
        image: formData.image || undefined
      });
      setErrors({});
    } catch (error: any) {
      if (error.errors) {
        const newErrors: typeof errors = {};
        
        error.errors.forEach((err: any) => {
          const path = err.path;
          if (path[0] === 'title' && path[1]) {
            if (!newErrors.title) newErrors.title = {};
            newErrors.title[path[1] as Language] = err.message;
          } else if (path[0] === 'description' && path[1]) {
            if (!newErrors.description) newErrors.description = {};
            newErrors.description[path[1] as Language] = err.message;
          } else if (path[0] === 'categoryId') {
            newErrors.categoryId = err.message;
          } else if (path[0] === 'price') {
            newErrors.price = err.message;
          }
        });
        
        setErrors(newErrors);
        // toast({
        //   title: 'Validation Error',
        //   description: 'Please check the form for errors.',
        //   variant: 'destructive',
        // });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <MultiLanguageForm
        titleValue={formData.title}
        descriptionValue={formData.description}
        onTitleChange={handleTitleChange}
        onDescriptionChange={handleDescriptionChange}
        titleErrors={errors.title}
        descriptionErrors={errors.description}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="categoryId">Category</Label>
          <Select
            value={formData.categoryId}
            onValueChange={(value) => {
              setFormData(prev => ({ ...prev, categoryId: value }));
              if (errors.categoryId) {
                setErrors(prev => ({ ...prev, categoryId: undefined }));
              }
            }}
          >
            <SelectTrigger className={errors.categoryId ? 'border-destructive' : ''}>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.title.en}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.categoryId && (
            <p className="text-sm text-destructive">{errors.categoryId}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Price ($)</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            min="0"
            value={formData.price}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }));
              if (errors.price) {
                setErrors(prev => ({ ...prev, price: undefined }));
              }
            }}
            placeholder="0.00"
            className={errors.price ? 'border-destructive' : ''}
          />
          {errors.price && (
            <p className="text-sm text-destructive">{errors.price}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image URL (Optional)</Label>
        <Input
          id="image"
          type="url"
          value={formData.image}
          onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
          placeholder="https://example.com/image.jpg"
        />
      </div>
      
      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {product ? 'Update' : 'Create'} Product
        </Button>
      </div>
    </form>
  );
}