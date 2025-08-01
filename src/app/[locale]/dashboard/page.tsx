"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAdminData } from '@/hooks/useAdmindata';
import { Package, Tags, TrendingUp, Users } from 'lucide-react';
 

export default function Dashboard() {
  const { categories, products } = useAdminData();

  const stats = [
    {
      title: 'Total Categories',
      value: categories.length,
      icon: Tags,
      color: 'text-primary'
    },
    {
      title: 'Total Products',
      value: products.length,
      icon: Package,
      color: 'text-success'
    },
    {
      title: 'Active Users',
      value: '1,234',
      icon: Users,
      color: 'text-info'
    },
    {
      title: 'Monthly Growth',
      value: '+12%',
      icon: TrendingUp,
      color: 'text-warning'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard. Here's an overview of your store.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {categories.slice(0, 3).map((category) => (
              <div key={category.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                <span className="font-medium">{category.title.en}</span>
                <span className="text-sm text-muted-foreground">
                  {category.createdAt.toLocaleDateString()}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Products</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                <div>
                  <span className="font-medium">{product.title.en}</span>
                  <p className="text-sm text-muted-foreground">${product.price}</p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.createdAt.toLocaleDateString()}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}