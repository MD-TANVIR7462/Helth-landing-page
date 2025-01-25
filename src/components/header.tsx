import { useState, useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";
export function Header() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top green navbar - shows when scrolling up */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${
          isScrollingDown ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="w-full">
          <div className="min-h-[1.875rem] bg-[#EFEFE9] text-center text-brand-green">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
              <button className="outline-none">
                <FaChevronLeft className="size-[0.875rem] opacity-75 hover:scale-105 hover:opacity-100" />
              </button>
              <div className="group flex flex-wrap items-center justify-center gap-x-2 py-1 hover:cursor-pointer hover:underline">
                <span className="font-bold capitalize underline-offset-4">
                  Need Assistance? (844)-640-0728
                </span>
                <FaArrowRight className="size-[0.875rem] transition-transform group-hover:translate-x-[1px]" />
              </div>
              <button className="outline-none">
                <FaChevronRight className="size-[0.875rem] opacity-75 hover:scale-105 hover:opacity-100" />
              </button>
            </div>
          </div>
          <div className="bg-brand-green">
            <div className="relative mx-auto flex min-h-[70px] max-w-7xl items-center justify-end px-4 py-3 text-white lg:py-1">
              <a
                className="absolute right-1/2 translate-x-1/2 p-1 text-2xl focus:ring"
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
        </div>
      </header>

      {/* Secondary navbar - shows when scrolling down */}
      <nav
        className={`fixed bottom-0 md:bottom-auto left-0 right-0 z-40 bg-white shadow-md transition-transform duration-300 md:top-0 ${
          isScrollingDown ? "translate-y-0" : "md:-translate-y-full"
        }`}
      >
        <div className="w-full border-b border-gray-200">
          <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <button className=" hidden  md:flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              <a href="#" className="text-xl md:hidden font-bold flex justify-center items-center">
                <img
                  className="h-16 w-auto "
                  src="/images/img-banner.webp"
                  alt="SNAP"
                />
                  <div className="text-sm font-semibold">
                 +Free Shipping on<br/> orders over{" "}
                  <span className="text-brand-lime">$50</span>
                </div>
              </a>
            </div>
            <div className="gap-6 md:flex md:items-center">
              <div className="hidden md:block">
                <div className="text-sm font-semibold">
                  Top Notch Customer Support
                </div>
                <div className="text-sm text-gray-600">
                  90-Day Money Back Guarantee
                </div>
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-semibold">
                  Free Shipping on orders over{" "}
                  <span className="text-brand-lime">$50</span>
                </div>
                <div className="text-sm text-gray-600">Fast Delivery</div>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <motion.button
                className="flex items-center gap-2 rounded-md bg-[#28A745] px-4 py-2 text-xs font-medium text-white shadow-lg transition-colors hover:bg-[#218838] sm:px-6 sm:py-2 sm:text-sm"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 1.4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }}
              >
                <span className="text-[18px] font-bold">Add To Cart</span>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from jumping */}
      <div className="h-[calc(1.4rem+5rem)]"></div>
    </>
  );
}
