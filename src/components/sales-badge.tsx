import { twMerge } from "tailwind-merge";

type SalesBadgeProps = React.HTMLAttributes<HTMLDivElement>;

export function SalesBadge({ className }: Readonly<SalesBadgeProps>) {
  return (
    <div
      className={twMerge(
        className,
        "relative rounded-xl border border-dashed border-brand-maroon bg-white px-4 py-1 font-bold",
      )}
    >
      Selling fast, HURRY!
      <span className="text-brand-maroon"> 43 sold in last hour!</span>
      <span className="absolute -right-[0.5em] -top-[0.75em] text-3xl">🔥</span>
    </div>
  );
}
