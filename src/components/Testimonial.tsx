import { twMerge } from "tailwind-merge";
import { AddToCartButton } from "./add-to-cart-button";
import { Star } from "lucide-react";

export function TestimonialSection() {
  return (
    <div className="secGap  mx-auto max-w-7xl lg:px-0">
      <div
        className={twMerge(
          "relative bg-[url('/images/Bgherooo2.png')] bg-cover bg-center bg-no-repeat px-2 py-12 text-center  shadow-lg sm:px-6 md:bg-[url('/images/Bgherooo1.png')] md:px-12 md:py-16"
        )}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-[12%]"></div>

        {/* Content (Stacked above the overlay) */}
        <div className="relative grid gap-3 md:grid-cols-12">
          {/* First Div: 2fr */}
          <div className="sm:col-span-1 lg:col-span-2"></div>

          {/* Second Div: 4fr */}
          <div className="col-span-7 mx-auto flex max-w-3xl flex-col items-center gap-5 lg:col-span-6">
            {/* Paragraph */}
            <div className="grid justify-items-center">
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400 md:h-6 md:w-6"
                  />
                ))}
              </div>
              <p className="max-w-[60ch] text-[12px] font-semibold leading-relaxed text-white md:text-black sm:text-base md:text-sm lg:max-w-[55ch] lg:font-bold">
                "Since using Advanced Urinary Formula, I've regained control and
                confidence. Fewer urgent trips to the bathroom, better sleep,
                and peace of mind — it's been life-changing!" — Sarah T.
              </p>
            </div>
            {/* Button */}
            <div className="relative rounded-xl border border-dashed border-brand-maroon px-3 py-1 text-[12px] font-bold text-white sm:px-4 sm:text-[13px] md:w-[350px] md:text-[15px]">
              Selling fast, HURRY!
              <span className="text-maroon"> 43 sold in last hour!</span>
              <span className="absolute -right-[0.5em] -top-[0.75em] text-3xl">
                🔥
              </span>
            </div>
            <AddToCartButton />
          </div>

          {/* Third Div: 4fr */}
          <div className="relative mt-5 hidden md:col-span-4 md:grid lg:col-span-4">
            <img
              src="/images/getupto.png"
              alt=""
              className="left-1/2 top-[-60px] w-[120px] -translate-x-1/2 transform md:absolute lg:w-[115px] xl:w-[130px]"
            />
            <img src="/images/2bottle.png" alt="Product Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
