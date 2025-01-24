import { BsCart3 } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export function Header() {
  return (
    <header className="full-width">
      <div className="grid-containerxl min-h-[1.875rem] bg-[#EFEFE9] text-center text-brand-green">
        <div className="breakout flex items-center justify-between">
          <button className="outline-none">
            <FaChevronLeft className="size-[0.875rem] opacity-75 hover:scale-105 hover:opacity-100" />
          </button>
          <div className="group flex flex-wrap items-center justify-center gap-x-2 py-1 hover:cursor-pointer hover:underline">
            <span className="font-bold capitalize underline-offset-4">
              Need Assistance? (888) 491-5043
            </span>
            <FaArrowRight className="size-[0.875rem] transition-transform group-hover:translate-x-[1px]" />
          </div>
          <button className="outline-none">
            <FaChevronRight className="size-[0.875rem] opacity-75 hover:scale-105 hover:opacity-100" />
          </button>
        </div>
      </div>
      <div className="grid-containerxl bg-brand-green">
        <div className="breakout relative flex min-h-10 items-center justify-end py-3 text-white lg:min-h-20 lg:py-1">
          <a
            className="foucs:ring absolute right-1/2 translate-x-1/2 p-1 text-2xl"
            href="#"
          >
            <h1 className="sr-only">Eco Health Funnel</h1>
            <img
              className="h-full w-[6rem]"
              src="/images/img-logo.webp"
              alt="logo"
            />
          </a>
          <button className="transition-transform hover:scale-110">
            <BsCart3 className="size-6" strokeWidth="0.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
