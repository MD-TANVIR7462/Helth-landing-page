import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { SalesBadge } from "./sales-badge";

export function Satisfaction() {
  return (
    <div className="bg-brand-beige  ">
      <section className="mx-auto my-0 grid max-w-7xl lg:grid-cols-2 p-5 lg:p-8 xl:p-0 justify-items-center place-items-center  lg:gap-12">
        <div className="py-6 md:py-8 lg:py-12 w-full text-center lg:text-start">
          <h3 className="text-maroon text-xl md:text-2xl font-bold">
            You have nothing to lose!
          </h3>
          <p className="my-4 md:my-5 text-3xl md:text-4xl lg:text-5xl font-bold  md:leading-[40px] lg:leading-[50px]  mx-auto max-w-[600px]">
            100% satisfaction guaranteed on every order!
          </p>
          <p className="my-4 md:my-5 text-sm md:text-base text-center lg:text-start">
            At Snap Supplements we believe optimizing your health should be
            simple. That's why we're committed to providing you with natural,
            high-quality supplements made with only the purest and carefully
            selected superfoods, botanicals, vitamins, and minerals that have
            been scientifically proven to produce real results.
          </p>
          <div className="flex flex-col gap-4 md:gap-5 items-center lg:items-start">
            <SalesBadge className="w-full max-w-xs" />
            <CartBadge />
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <AddToCartButton />
              <img
                className="w-16 md:w-20"
                src="/icons/icon-90-day.png"
                alt="90 day icon"
              />
            </div>
          </div>
        </div>
        <img
          className="mx-auto h-auto w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px] object-cover order-first lg:order-last"
          src="/images/img-satisfaction.png"
          alt="satisfaction image"
        />
      </section>
    </div>
  );
}