import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductsContent from "@/components/ProductsContent";

export default function page() {
  return (
    <div className="w-full">
      <Header isProductPage={true} />
      <ProductsContent />
      <Footer />
    </div>
  );
}
