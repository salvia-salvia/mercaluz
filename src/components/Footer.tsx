export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" w-full h-[300px] bg-[url('/img/footerImg.png')]   bg-cover bg-center">
      <ul className="w-full h-full  flex flex-wrap  items-end justify-around gap-x-2  pb-12 text-lg text-white">
        <li>&copy; {currentYear} Mercaluz, All Rights reserved</li>
        <li>Morocco, Safi</li>
        <li>
          <a href="mailto:contact&#64;mercaluz.com" className="hover:underline">
            contact&#64;mercaluz.com
          </a>
        </li>
      </ul>
    </div>
  );
}
