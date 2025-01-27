import { useState } from "react";

type SubscriptionType = "subscribe" | "onetime";
type PackageOption = "1bottle" | "3plus2" | "2plus1";

interface PackageState {
  subscriptionType: SubscriptionType;
  deliveryOption: string; // To manage selected delivery option
}

export function Packages() {
  const [packageStates, setPackageStates] = useState<
    Record<PackageOption, PackageState>
  >({
    "1bottle": { subscriptionType: "subscribe", deliveryOption: "1 month" },
    "3plus2": { subscriptionType: "subscribe", deliveryOption: "" },
    "2plus1": { subscriptionType: "subscribe", deliveryOption: "" },
  });

  const [total, setTotal] = useState("subscribe");

  const packages = {
    "3plus2": {
      title: "Buy 3, Get 2 FREE!",
      label: "Most Popular",
      subscribePrice: 119.98,
      onetimePrice: 149.85,
      perBottleSubscribe: 23.99,
      perBottleOnetime: 29.97,
      savingsSubscribe: "$70.12",
      savingsOnetime: "$99.90",
      delivery: "every 5 months",
      deliveryOptions: [],
      regularPrice: 249.75,
      popular: true,
      valueble: false,
      image: "/images/package2.png",
      regularly: "49.95",
    },
    "2plus1": {
      title: "Buy 2, Get 1 FREE!",
      label: "Great Value",
      subscribePrice: 79.83,
      onetimePrice: 99.9,
      perBottleSubscribe: 26.61,
      perBottleOnetime: 33.3,
      savingsSubscribe: "$70.12",
      savingsOnetime: "$49.95",
      delivery: "every 3 months",
      deliveryOptions: [],
      regularPrice: 149.85,
      popular: false,
      valueble: true,
      image: "/images/package3.png",
      regularly: "49.95",
    },
    "1bottle": {
      title: "1 Bottle",
      label: "Good Value",
      subscribePrice: 39.96,
      onetimePrice: 49.95,
      perBottleSubscribe: 39.96,
      perBottleOnetime: 49.95,
      savingsSubscribe: "$9.99",
      savingsOnetime: "Bundle to Save",
      delivery: "every month",
      deliveryOptions: ["1 month", "2 months", "3 months"],
      regularPrice: 49.95,
      popular: false,
      valueble: false,
      image: "/images/package1.png",
      regularly: null,
    },
  };

  const handleSubscriptionChange = (
    packageKey: PackageOption,
    type: SubscriptionType,
  ) => {
    setTotal(type);
    setPackageStates((prev) => ({
      ...prev,
      [packageKey]: { ...prev[packageKey], subscriptionType: type },
    }));
  };

  const handleDeliveryChange = (packageKey: PackageOption, option: string) => {
    setPackageStates((prev) => ({
      ...prev,
      [packageKey]: { ...prev[packageKey], deliveryOption: option },
    }));
  };

  return (
    <div className="mx-auto max-w-7xl bg-white px-4 secGap">
      <div className="mb-4 md:mb-12 text-center">
        <h1 className="title ">
          Choose Your Package
        </h1>
        <p className="text-md md:text-xl text-gray-600">Your Pathway to Bladder Health</p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(packages).map(([key, pkg]) => {
          const isSubscribe =
            packageStates[key as PackageOption].subscriptionType ===
            "subscribe";
          const selectedDeliveryOption =
            packageStates[key as PackageOption].deliveryOption;

          return (
            <div
              key={key}
              className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg"
            >
              <div
                className={`text-md w-full py-2 text-center font-semibold ${
                  pkg.popular || pkg.valueble
                    ? "bg-green-800 text-white"
                    : "text-black"
                }`}
              >
                {pkg.label}
              </div>
              <div className="py-5 px-1 sm:px-2 lg:px-4">
                <h2 className="mb-2 text-center text-2xl md:text-3xl font-extrabold text-gray-800">
                  {pkg.title}
                </h2>
                <p className="mb-6 text-center font-semibold italic text-green-700">
                  <span>{pkg.regularly !== null && "Instant Savings"}</span>{" "}
                  {isSubscribe ? pkg.savingsSubscribe : pkg.savingsOnetime}
                </p>
                <img src={pkg.image} alt="" className="mx-auto mb-4" />
                <div className="mb-6 text-center">
                  <div className="text-5xl font-bold text-gray-900">
                    $
                    {isSubscribe
                      ? pkg.perBottleSubscribe
                      : pkg.perBottleOnetime}
                  </div>
                  <p className="font-bold">Per canister</p>
                  {pkg.regularly && (
                    <div className="text-[20px] font-semibold text-gray-400">
                      Regularly
                      <span className="text-red-500 line-through">
                        {" "}
                        ${pkg?.regularly}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mb-6 space-y-3">
                  <label className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-2 sm:p-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name={`subscription-${key}`}
                        checked={isSubscribe}
                        onChange={() =>
                          handleSubscriptionChange(
                            key as PackageOption,
                            "subscribe",
                          )
                        }
                        className="h-4 w-4 text-green-600"
                      />
                      <span className="text-base ml-2">Subscribe & Save 20%</span>
                    </div>
                    <span className="font-semibold text-green-700">
                      ${pkg.subscribePrice}{" "}
                      <span className="font-normal text-gray-400 line-through">
                        {" "}
                        ${pkg?.regularPrice}
                      </span>
                    </span>
                  </label>
                  {isSubscribe &&
                    (key === "1bottle" ? (
                      <div className="ml-6">
                        <select
                          value={selectedDeliveryOption}
                          onChange={(e) =>
                            handleDeliveryChange(
                              key as PackageOption,
                              e.target.value,
                            )
                          }
                          className="w-full rounded border border-gray-300 p-2"
                        >
                          {pkg.deliveryOptions.map((option) => (
                            <option key={option} value={option}>
                              Delivery {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <div className="ml-6 text-gray-700">
                        Delivery {pkg.delivery}
                      </div>
                    ))}

                  <label className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name={`subscription-${key}`}
                        checked={!isSubscribe}
                        onChange={() =>
                          handleSubscriptionChange(
                            key as PackageOption,
                            "onetime",
                          )
                        }
                        className="h-4 w-4 text-green-600"
                      />
                      <span className="ml-2">One-time Purchase</span>
                    </div>
                    <span className="font-semibold text-green-600">
                      ${pkg.onetimePrice}{" "}
                      <span className="font-normal text-gray-400 line-through">
                        {" "}
                        ${pkg?.regularPrice}
                      </span>
                    </span>
                  </label>
                </div>

                <button className="w-full rounded-lg bg-green-600 px-4 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-700 lg:text-xl">
                  ADD TO CART
                </button>
                <p className="mt-3 text-center font-bold">
                  Total: $
                  {total == "subscribe" ? pkg.subscribePrice : pkg.onetimePrice}{" "}
                  + FREE Shipping
                </p>
                <p className="text-center text-sm font-semibold italic text-gray-600">
                  90-Day Money Back Guarantee
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
