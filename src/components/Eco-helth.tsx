import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { OffersBadge } from "./offers-badge";

const EcoHelth = () => {
  return (
    <section className="flex flex-col mt-12 mb-20 items-center justify-center ">
      <h2 className="text-balance pb-4  text-center text-2xl font-black  md:text-4xl">
        Try Eco Health® Advance Urinary Formula Risk Free for 90 Days
      </h2>
      <span className="max-w-2xl flex flex-col justify-center items-center gap-4">
        <CartBadge className="row-start-8 text-center md:row-start-4 lg:row-start-6" />
        <AddToCartButton className="col-span-full row-start-4 md:row-start-5 lg:col-span-1 lg:col-start-1 lg:row-start-7" />
        <OffersBadge className="col-span-full row-start-5 md:row-start-6 lg:col-span-1 lg:col-start-1 lg:row-start-8" />
      </span>
    </section>
  );
};

export default EcoHelth;
