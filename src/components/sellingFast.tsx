import { twMerge } from "tailwind-merge";
import { SalesBadge } from "./sales-badge";

const SellingFast = () => {
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
      <div
        className={twMerge(
          "rounded-[40px] bg-center px-4 py-12 text-center text-white shadow-lg sm:px-6 md:px-12 md:py-16",
        )}
        style={{
          backgroundImage: "url('/images/tryecobg.png')",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <SalesBadge className="mx-auto mb-3 inline-flex rounded-full border border-dashed border-white bg-[#395856] px-6 py-2 text-black" />
          <div className="mx-auto text-center text-white">
            <p className="text-sm sm:text-base">
              Selling out fast—don't wait!🚀 Over 40 purchased in the last hour!
            </p>
          </div>
          <div className="mx-auto mt-2 text-center">
            <p className="text-sm text-white/90 sm:text-base">
              Have questions? Contact us at{" "}
              <a href="tel:(844) -640-0728" className="text-green-500 hover:underline">
                (844) -640-0728
              </a>{" "}
              or email
              <br className="sm:hidden" />{" "}
              <span className="whitespace-nowrap">
                <a
                  href="mailto:support@myecohealth.com"
                  className="text-green-500 hover:underline"
                >
                  support@myecohealth.com{" "}
                </a>{" "}
                We're here to help!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingFast;
