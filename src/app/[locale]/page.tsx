import AboutContent from "@/components/AboutContent";
import CategoriesContent from "@/components/CategoriesContent";
import Header from "@/components/Header";
import ReasonContent from "@/components/ReasonContent";
import Link from "next/link";
import "animate.css";
import ContactContent from "@/components/ContactContent";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("hero");
  return (
    <>
      <div className="relative flex justify-center w-full min-h-screen overflow-hidden">
        <Header />
        {/* Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vd.mp4" type="video/mp4" />
        </video>

        {/* Text Content */}
        <div className="flex bg animate__animated  animate__fadeInLeft animate__delay-1s w-full  mx-auto   md:w-[90%] 2xl:w-[70%] flex-col text-white px-2 sm:pl-20 md:px-0 items-center lg:items-start justify-center">
          <span className="block text-xl md:text-3xl lg:text-5xl  font-light">
            {t("part1")}
          </span>
          <br />
          <span className="block mb-6 md:mb-12 text-xl md:text-3xl lg:text-5xl 2xl:text-7xl  tracking-wide font-bold">
            {t("part2")}
          </span>
          <p className="text-sm font-medium lg:text-lg text-center lg:text-start">
            {t("part3")}
          </p>
        </div>

        <Link
          href="#about"
          className="flex justify-center items-center absolute bottom-10 md:bottom-12"
        >
          <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <svg
              className="w-5 h-5 text-gray-100 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </Link>
      </div>

      <section className="w-full min-h-screen bg-[url('/img/aboutbg.png')] bg-cover bg-center ">
        <AboutContent />
      </section>
      <section className="w-full min-h-screen bg-[url('/img/productsbg.png')] bg-cover bg-center ">
        <CategoriesContent />
      </section>
      <section className="w-full mt-[200px] min-h-screen bg-[url('/img/reasonBg.png')] bg-cover bg-center ">
        <ReasonContent />
      </section>
      <section id="about" className="w-full mt-[100px] min-h-screen">
        <ContactContent />
      </section>
      <Footer />
    </>
  );
}
