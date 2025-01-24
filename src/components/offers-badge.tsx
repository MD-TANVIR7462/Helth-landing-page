import { twMerge } from "tailwind-merge";

type OffersBadgeProps = React.HTMLAttributes<HTMLButtonElement>;

export function OffersBadge({ className }: Readonly<OffersBadgeProps>) {
  return (
    <div
      className={twMerge(
        className,
        "flex flex-wrap items-center justify-center gap-8 text-sm font-semibold",
      )}
    >
      <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:text-start">
        <img
          className="size-8"
          src="/icons/icon-offerings-1.svg"
          alt="offerings icon"
        />
        <span>
          100% Secure
          <br />
          Checkout
        </span>
      </div>
      <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:text-start">
        <img
          className="size-8"
          src="/icons/icon-offerings-2.svg"
          alt="offerings icon"
        />
        <span>
          Ships in 1<br />
          Business Day
        </span>
      </div>
      <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:text-start">
        <img
          className="size-8"
          src="/icons/icon-offerings-3.svg"
          alt="offerings icon"
        />
        <span>
          90-Day
          <br />
          Guarantee
        </span>
      </div>
    </div>
  );
}
