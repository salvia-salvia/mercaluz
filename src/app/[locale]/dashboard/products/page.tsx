"use client";
import { useState } from "react";
import { Plus, Edit, Trash2, Search, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductForm } from "@/components/admin/ProductForm";
import { Product, LANGUAGE_FLAGS, Language } from "@/types";
import { useAdminData } from "@/hooks/useAdmindata";

export default function Products() {
  const { products, categories, createProduct, updateProduct, deleteProduct } =
    useAdminData();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      product.title[selectedLanguage]
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      product.description[selectedLanguage]
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.title[selectedLanguage] : "Unknown Category";
  };

  const handleCreateProduct = (data: any) => {
    try {
      createProduct(data);
      setIsDialogOpen(false);
      //   toast({
      //     title: 'Success',
      //     description: 'Product created successfully!',
      //   });
    } catch (error) {
      //   toast({
      //     title: 'Error',
      //     description: 'Failed to create product.',
      //     variant: 'destructive',
      //   });
    }
  };

  const handleUpdateProduct = (data: any) => {
    if (editingProduct) {
      try {
        updateProduct(editingProduct.id, data);
        setEditingProduct(null);
        setIsDialogOpen(false);
        // toast({
        //   title: 'Success',
        //   description: 'Product updated successfully!',
        // });
      } catch (error) {
        // toast({
        //   title: 'Error',
        //   description: 'Failed to update product.',
        //   variant: 'destructive',
        // });
      }
    }
  };

  const handleDeleteProduct = (id: string) => {
    try {
      deleteProduct(id);
      //   toast({
      //     title: 'Success',
      //     description: 'Product deleted successfully!',
      //   });
    } catch (error) {
      //   toast({
      //     title: 'Error',
      //     description: 'Failed to delete product.',
      //     variant: 'destructive',
      //   });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Manage your products in multiple languages.
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingProduct(null)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProduct ? "Edit Product" : "Create New Product"}
              </DialogTitle>
            </DialogHeader>
            <ProductForm
              product={editingProduct}
              categories={categories}
              onSubmit={
                editingProduct ? handleUpdateProduct : handleCreateProduct
              }
              onCancel={() => setIsDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          {Object.entries(LANGUAGE_FLAGS).map(([code, flag]) => {
            const lang = code as Language;
            return (
              <Button
                key={code}
                variant={selectedLanguage === lang ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLanguage(lang)}
              >
                {flag} {code.toUpperCase()}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="group hover:shadow-md transition-shadow"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <CardTitle className="text-lg">
                    {product.title[selectedLanguage]}
                  </CardTitle>
                  <div className="flex gap-1 items-center">
                    {Object.entries(LANGUAGE_FLAGS).map(([code, flag]) => (
                      <Badge key={code} variant="secondary" className="text-xs">
                        {flag}
                      </Badge>
                    ))}
                    {product.image && (
                      <Badge variant="outline" className="text-xs">
                        <Upload className="w-3 h-3 mr-1" />
                        Image
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setEditingProduct(product);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.description[selectedLanguage]}
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Price:</span>
                  <span className="text-lg font-bold text-primary">
                    ${product.price}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Category:</span>
                  <Badge variant="outline" className="text-xs">
                    {getCategoryName(product.categoryId)}
                  </Badge>
                </div>
              </div>

              <div className="mt-4 text-xs text-muted-foreground">
                Created: {product.createdAt.toLocaleDateString()}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found.</p>
        </div>
      )}
    </div>
  );
}
