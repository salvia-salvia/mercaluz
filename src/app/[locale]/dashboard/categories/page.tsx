"use client";
import { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";
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
import { Category, LANGUAGE_FLAGS, Language } from "@/types";
import { useAdminData } from "@/hooks/useAdmindata";
import { CategoryForm } from "@/components/dashboard/CategoryForm";

export default function Categories() {
  const { categories, createCategory, updateCategory, deleteCategory } =
    useAdminData();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en");
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredCategories = categories.filter(
    (category) =>
      category.title[selectedLanguage]
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      category.description[selectedLanguage]
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const handleCreateCategory = (data: any) => { 
    try {
      console.log(data);
      
      createCategory(data);
      setIsDialogOpen(false);
      //   toast({
      //     title: 'Success',
      //     description: 'Category created successfully!',
      //   });
    } catch (error) {
      //   toast({
      //     title: 'Error',
      //     description: 'Failed to create category.',
      //     variant: 'destructive',
      //   });
    }
  };

  const handleUpdateCategory = (data: any) => {
    if (editingCategory) {
      try {
        updateCategory(editingCategory.id, data);
        setEditingCategory(null);
        setIsDialogOpen(false);
        // toast({
        //   title: 'Success',
        //   description: 'Category updated successfully!',
        // });
      } catch (error) {
        // toast({
        //   title: 'Error',
        //   description: 'Failed to update category.',
        //   variant: 'destructive',
        // });
      }
    }
  };

  const handleDeleteCategory = (id: string) => {
    try {
      deleteCategory(id);
      //   toast({
      //     title: 'Success',
      //     description: 'Category deleted successfully!',
      //   });
    } catch (error) {
      //   toast({
      //     title: 'Error',
      //     description: 'Failed to delete category.',
      //     variant: 'destructive',
      //   });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
          <p className="text-muted-foreground">
            Manage your product categories in multiple languages.
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingCategory(null)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingCategory ? "Edit Category" : "Create New Category"}
              </DialogTitle>
            </DialogHeader>
            <CategoryForm
              category={editingCategory}
              onSubmit={
                editingCategory ? handleUpdateCategory : handleCreateCategory
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
            placeholder="Search categories..."
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
        {filteredCategories.map((category) => (
          <Card
            key={category.id}
            className="group hover:shadow-md transition-shadow"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <CardTitle className="text-lg">
                    {category.title[selectedLanguage]}
                  </CardTitle>
                  <div className="flex gap-1">
                    {Object.entries(LANGUAGE_FLAGS).map(([code, flag]) => (
                      <Badge key={code} variant="secondary" className="text-xs">
                        {flag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setEditingCategory(category);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteCategory(category.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {category.description[selectedLanguage]}
              </p>
              <div className="mt-4 text-xs text-muted-foreground">
                Created: {String(category.created_at)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No categories found.</p>
        </div>
      )}
    </div>
  );
}
