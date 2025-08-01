import { navbarRoutes } from "@/constants";
import { Globe, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import LanguageSelector from "./Languages";

export default function MobileNavbar({
  showMobileNavbar,
  setShowMobileNavbar,
  scrolled,
}: {
  showMobileNavbar: boolean;
  scrolled: boolean;
  setShowMobileNavbar: (b: boolean) => void;
}) {
  const t = useTranslations();
  return (
    <div
      className={`fixed z-20 top-0 ${
        showMobileNavbar ? "block" : "hidden"
      } md:hidden bg-white text-black w-full h-screen`}
    >
      <div className="flex justify-between items-center w-full p-6 absolute">
        <LanguageSelector />
        <X
          onClick={() => setShowMobileNavbar(false)}
          className="w-[30px] h-[30px]"
        />
      </div>
      <nav className="flex flex-col capitalize  h-screen items-center justify-center  gap-8  text-4xl  ">
        {navbarRoutes.map((route, i) => {
          return (
            <Link key={i} href={route.link} className="relative group ">
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
    </div>
  );
}
