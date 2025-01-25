import { useState } from "react";

type SubscriptionType = "subscribe" | "onetime";
type PackageOption = "1bottle" | "3plus2" | "2plus1";

interface PackageState {
  subscriptionType: SubscriptionType;
}

export function Packages() {
  const [packageStates, setPackageStates] = useState<
    Record<PackageOption, PackageState>
  >({
    "1bottle": { subscriptionType: "subscribe" },
    "3plus2": { subscriptionType: "subscribe" },
    "2plus1": { subscriptionType: "subscribe" },
  });

  // const calculatePrice = (basePrice: number, isSubscription: boolean) => {
  //   return isSubscription ? basePrice * 0.85 : basePrice; // 15% discount for subscription
  // };

  const packages = {
    "1bottle": {
      title: "1 Bottle",
      label: "Good Value",
      basePrice: 149.85,
      subscribePrice: 84.91,
      onetimePrice: 99.9,
      savings: "$64.94",
      popular: false,
      grate:false,
      image:"/images/package1.png"

    },
    "3plus2": {
      title: "Buy 3, Get 2 Free!",
      label: "Most Popular",
      basePrice: 149.85,
      subscribePrice: 84.91,
      onetimePrice: 99.9,
      savings: "$64.94",
      popular: true,
      grate:false,
      image:"/images/package2.png"

    },
    "2plus1": {
      title: "Buy 2, Get 1 Free!",
      label: "Great Value",
      basePrice: 149.85,
      subscribePrice: 84.91,
      onetimePrice: 99.9,
      savings: "$64.94",
      popular: false,
      grate:true,
      image:"/images/package3.png"

    },
  };

  const handleSubscriptionChange = (
    packageKey: PackageOption,
    type: SubscriptionType,
  ) => {
    setPackageStates((prev) => ({
      ...prev,
      [packageKey]: { ...prev[packageKey], subscriptionType: type },
    }));
  };

  return (
    <div className="max-w-7xl mx-auto bg-white px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">
          Choose Your Package
        </h1>
        <p className="text-xl text-gray-600">Your Pathway to Bladder Health</p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:mx-12 md:mx-2 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(packages).map(([key, pkg]) => (
          <div
            key={key}
            className="relative overflow-hidden rounded-xl border  border-gray-200 bg-white shadow-lg"
          >
            <div
              className={`w-full py-2 text-center font-bold  text-lg  ${pkg.popular||pkg?.grate ? "bg-green-600 text-white" : "text-black"}`}
            >
              {pkg.label}
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-center text-2xl font-bold text-gray-800">
                {pkg.title}
              </h2>
              <p className="mb-6 text-center text-gray-600">
                Instant Savings {pkg.savings}
              </p>
<img src={pkg?.image} alt="" />
              <div className="mb-6 text-center">
                <div className="text-4xl font-bold text-gray-900">$28.30</div>
                <div className="text-sm text-gray-600">Per Canister</div>
                <div className="mt-1 text-sm text-gray-500">
                  REGULARLY ${pkg.basePrice}
                </div>
              </div>

              <div className="mb-6 space-y-3">
                <label className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name={`subscription-${key}`}
                      checked={
                        packageStates[key as PackageOption].subscriptionType ===
                        "subscribe"
                      }
                      onChange={() =>
                        handleSubscriptionChange(
                          key as PackageOption,
                          "subscribe",
                        )
                      }
                      className="h-4 w-4 text-green-600"
                    />
                    <span className="ml-2">Subscribe & Save 15%</span>
                  </div>
                  <span className="font-semibold text-green-600">
                    ${pkg.subscribePrice}
                  </span>
                </label>
                <div className="ml-6 text-sm text-gray-500">
                  Deliver Every month
                </div>

                <label className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name={`subscription-${key}`}
                      checked={
                        packageStates[key as PackageOption].subscriptionType ===
                        "onetime"
                      }
                      onChange={() =>
                        handleSubscriptionChange(
                          key as PackageOption,
                          "onetime",
                        )
                      }
                      className="h-4 w-4 text-green-600"
                    />
                    <span className="ml-2">One-time</span>
                  </div>
                  <span className="font-semibold text-green-600">
                    ${pkg.onetimePrice}
                  </span>
                </label>
              </div>

              <button className="w-full rounded-lg bg-green-600 px-4 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-700 lg:text-xl">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
