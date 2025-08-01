import AboutPageContent from "@/components/AboutPageContent";
import Header from "@/components/Header";

export default function page() {
  return (
    <>
      <Header isProductPage={true} />
      <AboutPageContent />
    </>
  );
}
