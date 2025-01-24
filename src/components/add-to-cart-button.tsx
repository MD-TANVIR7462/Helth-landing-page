import { twMerge } from "tailwind-merge";

type AddToCartButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export function AddToCartButton({ className }: Readonly<AddToCartButtonProps>) {
  return (
    <button
      className={twMerge(
        className,
        "relative z-10 flex h-12 w-[16em] items-center justify-center rounded-lg border border-dashed border-brand-maroon bg-brand-maroon px-4 text-xl font-bold text-white",
      )}
    >
      Add To Cart
      <img
        className="absolute right-[2.125em] z-10"
        src="/icons/icon-add-to-cart-button.svg"
        alt=""
      />
      <span className="absolute right-0 top-0 flex h-full w-[3.25em] items-center justify-center rounded-r-[inherit] bg-[#ffffe2] px-4 font-semibold text-neutral-dark">
        FREE
      </span>
    </button>
  );
}
