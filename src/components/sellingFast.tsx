import { SalesBadge } from "./sales-badge";

const SellingFast = () => {
  return (
    <div className="mx-auto max-w-7xl mt-2 md:mt-4">
      <div className="mx-auto text-center max-w-3xl">
        <SalesBadge className="mx-auto mb-3 inline-flex rounded-full border border-dashed border-white bg-[#395856] px-6 py-2 text-black" />
        <div className="mx-auto max-w-2xl font-semibold">
          <p className="px-3 text-[13px] text-black md:text-lg">
            <span>
              Selling out fast—don't wait!🚀 Over 40 purchased in the last hour!{" "}
            </span>
            <span className="mt-2">Have questions? Contact us at </span>
            <span>
              <a
                href="tel:(844) -640-0728"
                className="text-green-500 hover:underline"
              >
                (844) -640-0728
              </a>
            </span>{" "}
            or email{" "}
            <a
              href="mailto:support@myecohealth.com"
              className="text-green-500 hover:underline"
            >
              support@myecohealth.com
            </a>
            We're here to help!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellingFast;
