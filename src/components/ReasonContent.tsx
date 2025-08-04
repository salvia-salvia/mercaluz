import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ReasonContent() {
  const t = useTranslations("reasonsWhy");
  const reasons = [
    { id: "01" },
    { id: "02" },
    { id: "03" },
    { id: "04" },
    { id: "05" },
  ];
  return (
    <div className="max-w-[1500px] mx-auto font-open-sans md:pl-7 px-8">
      <h2 className="text-xl max-w-3xl  font-semibold tracking-widest md:leading-20 sm:text-3xl 2xl:text-5xl  mb-6  lg:mb-22  text-gray-800">
        {t("title")}
      </h2>{" "}
      <div className="flex  gap-5 ">
        <ul className="flex flex-col gap-16 max-w-xl mt-10 text-black   md:text-xl leading-relaxed">
          {reasons.map(({ id }) => (
            <li key={id} className="flex items-start">
              <span className="text-3xl font-semibold text-[#34699a] w-12 flex-shrink-0">
                {id}
              </span>
              <p className="text-gray-600 md:text-lg leading-relaxed">
                {t(`reasons.${id}`)}
              </p>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex justify-center">
          {" "}
          <Image
            className="  w-[600px] h-[700px] z-[-1]"
            src={"/img/reasonImg.png"}
            alt=""
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
