import AboutContent from "@/components/AboutContent";
import CategoriesContent from "@/components/CategoriesContent";
import Header from "@/components/Header";
import ReasonContent from "@/components/ReasonContent";
import Link from "next/link";
import "animate.css";
import ContactContent from "@/components/ContactContent";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function Home() {
  const t = useTranslations("hero");
  const tContact = useTranslations("contact_us");
  return (
    <>
      <div className="relative  font-open-sans  flex justify-center w-full min-h-screen overflow-hidden">
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
        <div className="flex bg animate__animated  animate__fadeInLeft  w-full  mx-auto   md:w-[90%] 2xl:w-[70%] flex-col text-white px-2 sm:pl-20 md:px-0 items-center lg:items-start justify-center">
          <span className="block text-xl md:text-3xl lg:text-4xl   font-light">
            {t("part1")}
          </span>
          <br />
          <span className="block mb-6 md:mb-12 text-xl md:text-3xl lg:text-5xl 2xl:text-6xl  tracking-widest leading-20 font-bold">
            {t("part2")}
          </span>
          <p className="text-sm  font-light tracking-wider lg:text-lg text-center lg:text-start">
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

      <section className="w-full  min-h-screen md:px-12 bg-[url('/img/aboutbg.png')] bg-cover bg-center ">
        <AboutContent />
      </section>
      <section className="w-full my-[100px] min-h-screen md:px-12  bg-[url('/img/productsbg.png')] bg-cover bg-center ">
        <CategoriesContent />
      </section>
      <section className="w-full my-[100px] min-h-screen md:px-12  bg-[url('/img/reasonBg.png')] bg-cover bg-center ">
        <ReasonContent />
      </section>
      <section
        id="contact"
        className="max-w-[1600px] mx-auto flex flex-col-reverse xl:flex-row justify-around  items-center mt-[100px] min-h-screen md:px-20 "
      >
        <div className=" flex flex-col gap-12 font-open-sans flex-1 pb-20 md:pb-0 ">
          <div className="flex items-center gap-8">
            <Image
              src={"/icons/location-icon.svg"}
              width={60}
              height={60}
              alt="location"
              className="w-[40px] md:w-[60px]"
            />
            <div className="">
              <h2 className="uppercase text-[#8f8f8f] py-2 font-light">
                {tContact("info.address")}:
              </h2>
              <p className="md:text-xl">Safi, Morocco</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Image
              src={"/icons/phone-call.svg"}
              width={60}
              height={60}
              alt="phone"
              className="w-[40px] md:w-[60px]"
            />
            <div>
              <h2 className="uppercase text-[#8f8f8f] py-2 font-light">
                {tContact("info.phone")}:
              </h2>
              <p className="md:text-xl">+212 465 43 55 23</p>
            </div>
          </div>
          <div>
            <h2 className="uppercase text-[#8f8f8f] py-2 font-light">
              {tContact("info.contactMedia")}:
            </h2>
            <div className="flex items-center gap-4 p-2">
              <Link href={`#`}>
                <Image
                  src={"/icons/linkedin.svg"}
                  width={25}
                  height={25}
                  alt="linkedin"
                />
              </Link>
              <Link href={`#`}>
                <Image
                  src={"/icons/facebook.svg"}
                  width={25}
                  height={25}
                  alt="facebook"
                />
              </Link>
            </div>
          </div>
        </div>
        <ContactContent />
      </section>
      <Footer />
    </>
  );
}
