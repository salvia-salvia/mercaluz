import CategoryPageContent from "@/components/CategoryPageContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Categories } from "@/types";

import React from "react";
type Props = {
  params: Promise<{ category: Categories }>;
};
export default async function page({ params }: Props) {
  const { category } = await params;
  return (
    <div className="w-full">
      <Header isProductPage={true} />
      <CategoryPageContent category={category} />
      <Footer />
    </div>
  );
}
