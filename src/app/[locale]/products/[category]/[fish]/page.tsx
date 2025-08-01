import FishContent from "@/components/FishContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Categories } from "@/types";
import React from "react";
type Props = {
  params: Promise<{ category: Categories; fish: string }>;
};
export default async function page({ params }: Props) {
  const { fish, category } = await params;

  return (
    <section>
      <Header isProductPage={true} />
      <FishContent category={category} fish={fish} />
      <Footer />
    </section>
  );
}
