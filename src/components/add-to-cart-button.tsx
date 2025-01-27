import { twMerge } from "tailwind-merge";

type AddToCartButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export function AddToCartButton({ className }: Readonly<AddToCartButtonProps>) {
  return (
    <button
      className={twMerge(
        className,
        "relative z-10 flex h-12 w-[16em]  items-center justify-center rounded-lg border border-dashed border-brand-maroon bg-brand-maroon px-4 text-xl font-bold text-white",
      )}
    >
      Add To Cart
      <img
        className="absolute right-[2.15em] z-10"
        src="/icons/icon-add-to-cart-button.svg"
        alt=""
      />
<span
    className="absolute border-[2px] border-dashed border-yellow-500 right-[-5px] top--1 flex h-[calc(100%+1.7px)]  w-[4em] items-center justify-center rounded-r-inherit bg-[#ffffe2] px-4 font-semibold rounded-md text-neutral-dark text-lg"
  >
    FREE
  </span>
    </button>
  );
}
