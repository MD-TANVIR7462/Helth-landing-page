import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { SalesBadge } from "./sales-badge";

export function Satisfaction() {
  return (
    <div className="bg-brand-beige">
      <section className="mx-auto my-0 grid max-w-7xl place-items-center justify-items-center p-5 lg:grid-cols-2 lg:gap-12 lg:p-8 xl:p-0">
        {/* Image Section */}
        <div className="relative mx-auto flex aspect-square max-w-[300px] items-center justify-center order-first md:order-first lg:order-last md:max-w-[400px] lg:max-w-[500px]">
          <img
            className="h-full w-full rounded-full object-cover p-5"
            src="/images/heroimage.png"
            alt="satisfaction image"
          />
          <div className="absolute inset-0">
            <svg
              className="h-full w-full"
              viewBox="0 0 110 110"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 50,2 A 53,53 0 1,1 2,55"
                stroke="#800000"
                strokeWidth=".4"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full py-6 text-center md:py-8 lg:py-12 lg:text-start">
          <h3 className="text-maroon text-xl font-bold md:text-2xl">
            You have nothing to lose!
          </h3>
          <p className="mx-auto my-4 max-w-[600px] text-3xl font-bold md:my-5 md:text-4xl md:leading-[40px] lg:text-5xl lg:leading-[50px]">
            100% satisfaction guaranteed on every order!
          </p>
          <p className="my-4 text-center text-sm md:my-5 md:text-base lg:text-start">
            At Snap Supplements we believe optimizing your health should be
            simple. That's why we're committed to providing you with natural,
            high-quality supplements made with only the purest and carefully
            selected superfoods, botanicals, vitamins, and minerals that have
            been scientifically proven to produce real results.
          </p>
          <div className="flex flex-col items-center gap-4 md:gap-5 lg:items-start">
            <SalesBadge className="w-full max-w-xs" />
            <CartBadge />
            <div className="flex flex-col items-center gap-3 lg:flex-row">
              <AddToCartButton />
              <img
                className="w-16 md:w-20"
                src="/icons/icon-90-day.png"
                alt="90 day icon"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
