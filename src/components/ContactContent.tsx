"use client";
import { useTranslations } from "next-intl";
import React, { FormEvent, useRef } from "react";

export default function ContactContent() {
  const t = useTranslations("contact_us");
  const form = useRef(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center lg:items-start  font-open-sans  justify-center max-w-7xl mx-auto min-h-screen ">
      {" "}
      <h2 className="text-xl w-full sm:text-3xl 2xl:text-5xl  font-semibold tracking-widest md:leading-20 px-8 lg:px-0 mb-6  text-gray-800">
        {t("title")}
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col items-center lg:items-start gap-10 px-8 lg:px-0 mt-7"
      >
        <div className="w-[310px] sm:w-[400px] md:w-[600px] lg:w-[800px] flex flex-col md:flex-row gap-10 items-center justify-center">
          <input
            placeholder={`${t("form.placeholder_name")} *`}
            type="text"
            name="name"
            className="border-b-2 focus:outline-none w-full  py-3 focus:border-[#34699a]  focus:placeholder:text-white"
            required
          />
          <input
            placeholder={`${t("form.placeholder_email")} *`}
            type="email"
            name="email"
            className="border-b-2 focus:outline-none w-full py-3 focus:border-[#34699a] focus:placeholder:text-white"
            required
          />
        </div>
        <input
          placeholder={`${t("form.placeholder_phone")} *`}
          type="text"
          name="phone"
          className="border-b-2 focus:outline-none w-[310px] sm:w-[400px] md:w-[600px] lg:w-[800px] py-3 focus:border-[#34699a] focus:placeholder:text-white"
          required
        />

        <textarea
          placeholder={`${t("form.placeholder_msg")} *`}
          className="border-b-2 focus:outline-none w-[310px] sm:w-[400px] md:w-[600px] lg:w-[800px] py-3 focus:border-[#34699a] focus:placeholder:text-white"
          required
          name="message"
        ></textarea>
        <button
          type="submit"
          className=" text-sm w-fit  py-3 md:py-4 px-4 font-medium  uppercase bg-[#34699a] text-white"
        >
          {t("form.btn_text")}
        </button>
      </form>
    </div>
  );
}
