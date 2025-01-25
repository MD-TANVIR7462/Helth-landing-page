import { IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";
import { config } from "../config";
import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { OffersBadge } from "./offers-badge";
import { SalesBadge } from "./sales-badge";

export function Banner() {
  return (
    <section className=" full-width grid-containerxl  bg-gradient-to-r from-[#FAF3E1] to-yellow-200/40">
      <div className="lg:gird-cols-2 relative grid items-center justify-center justify-items-center gap-y-0 py-14 pt-10 text-center md:gap-x-10 md:gap-y-5 md:text-start lg:grid-cols-[75%_1fr] lg:justify-items-start">
        <div className="mb-6 md:my-0 flex flex-wrap items-center justify-center gap-x-3 rounded-full border bg-white px-4 py-2 text-sm font-bold shadow-lg md:py-1 md:text-base">
          <span className="flex items-center ">
            {Array.from({ length: 5 }).map((_, index) => (
              <IoMdStar
                className="-ms-1 size-[1.675rem] text-[#e5c729]"
                key={`star${index}`}
              />
            ))}
          </span>
          <span>4.7/5 stars</span>
          <span>859 verified reviews</span>
        </div>
        <p className="max-w-[90%] md:max-w-[70%] text-wrap text-[1.5rem] font-black  text-[#8e2253] md:col-start-1 lg:text-[44px] lg:leading-[1.25] text-center lg:text-start">
          BLADDER-BUILDING Super Nutrient
          <span className="text-neutral-dark"> for </span> LEAK FREE days
          <span className="text-neutral-dark"> and </span>
          RESTFUL NIGHTS!
        </p>
        <p className="col-span-full max-w-[70ch] text-pretty text-[1.1rem] font-semibold leading-relaxed lg:col-span-1 lg:row-start-3 text-center lg:text-start">
          If bladder problems have you stressed, frustrated, and embarrassed
          then it might be time to try this remedy you can try at home. It’s
          natural, affordable and works day and night.
        </p>
        <ul className="col-span-full col-start-1 space-y-2 pb-5 text-start font-semibold md:text-xl lg:col-span-1 lg:row-start-4">
          {config.bannerOfferings.map((offering, index) => (
            <li className="flex items-start gap-x-2" key={`offering${index}`}>
              <div>
                <IoIosCheckmarkCircle className="size-7 text-[#1f8e2a]" />
              </div>
              <span>{offering}</span>
            </li>
          ))}
        </ul>
        <SalesBadge className="row-start-7 md:row-start-7 lg:row-start-5 my-6 md:my-0" />
        <CartBadge className="row-start-8 text-center md:row-start-8 lg:row-start-6 mb-6 md:my-0" />

        <AddToCartButton className="col-span-full row-start-4 md:row-start-4 lg:col-span-1 lg:col-start-1 lg:row-start-7" />
        <OffersBadge className="col-span-full row-start-5 md:row-start-5 lg:col-span-1 lg:col-start-1 lg:row-start-8 my-6 md:my-0"  />
        <div className="right-0 top-1/2 row-start-3 max-w-[40rem] md:row-start-3 lg:col-start-2  lg:row-start-1 lg:absolute lg:row-span-8 lg:w-[min(52vw,_45rem)] lg:max-w-none lg:-translate-y-1/2">
          <img
            className="h-auto  max-h-[60vh] w-full object-cover object-center md:max-h-[70vh] lg:max-h-[85vh] xl:h-[700px]"
            src="/images/pngheroo.png"
            alt="banner image"
          />
        </div>
        <picture className="left-[35%] top-[42%] col-span-full max-w-[16rem] lg:absolute lg:max-w-20 ">
          <source
            media="(min-width:64rem)"
            srcSet="/icons/icon-manufacturer-vertical.webp"
          />
          <source srcSet="/icons/icon-manufacturer-horizontal.webp" />
          <img
            src="/icons/icon-manufacturer-horizontal.webp"
            alt="Manufacturer logos"
          />
        </picture>
      </div>
    </section>
  );
}
