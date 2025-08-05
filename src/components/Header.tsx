"use client";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { navbarRoutes } from "@/constants";
import { useLocale, useTranslations } from "next-intl";
import LanguageSelector from "./Languages";
import { usePathname } from "next/navigation";

export default function Header({
  className,
  isProductPage,
}: {
  className?: string;
  isProductPage?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` ${className} font-open-sans fixed animate__animated  animate__fadeInDownBig top-0 w-full py-2 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : `bg-transparent  ${
              isProductPage ? "text-black" : "text-white "
            } pt-4 md:pt-8 `
      }`}
    >
      <div
        className={`relative flex justify-between ${
          !showMobileNavbar && " px-8"
        } md:justify-around items-center   mx-auto`}
      >
        {/* mobile navbar */}
        <MobileNavbar
          scrolled={scrolled}
          showMobileNavbar={showMobileNavbar}
          setShowMobileNavbar={setShowMobileNavbar}
        />
        <nav
          className={`hidden md:flex items-center gap-6 lg:gap-10  lg:text-lg`}
        >
          {navbarRoutes.map((route, i) => {
            const fullPath = `/${locale}${route.link}`;
            const cleanFullPath = fullPath.endsWith("/")
              ? fullPath.slice(0, -1)
              : fullPath;
            const isActive = pathname === cleanFullPath;

            return (
              <Link
                key={i}
                href={fullPath}
                className={`relative capitalize group ${
                  isActive ? "font-extrabold text-xl" : " "
                }`}
              >
                {t(route.name)}
                <span
                  className={`absolute left-1/2 bottom-0 w-0 h-[3px] ${
                    scrolled ? "bg-black" : "bg-white"
                  } transition-all duration-300 group-hover:left-0 group-hover:w-full`}
                ></span>
              </Link>
            );
          })}
        </nav>
        <div className=" mr-28 w-[100px] lg:w-[200px] lg:mr-42 ">
          <Link href={`/${locale}`}>
            <Image
              alt="logo"
              src={`${
                scrolled || isProductPage ? "/logo.svg" : "/white_logo.svg"
              }`}
              width={200}
              height={70}
            />
          </Link>
        </div>

        <div
          className={`p-1 ${
            scrolled ? "bg-gray-100" : " bg-transparent"
          }   block md:hidden`}
        >
          {" "}
          <MenuIcon
            onClick={() => setShowMobileNavbar(true)}
            className="w-[30px] h-[30px] cursor-pointer"
          />
        </div>

        <div className="hidden md:flex">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
