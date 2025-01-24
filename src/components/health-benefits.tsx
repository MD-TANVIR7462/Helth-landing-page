import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { OffersBadge } from "./offers-badge";

const benefits = [
  {
    image: "/images/img-benefits-1.webp",
    icon: "/icons/icon-benefits-1.svg",
    title: "Promotes Healthy Inflammatory Response",
    description:
      "Contains antioxidants that help manage inflammation and support overall health.",
    keypoints: [
      "Supports healthy inflammatory response.",
      "Protects against oxidative stress.",
      "Promotes cellular regeneration.",
    ],
  },
  {
    image: "/images/img-benefits-2.webp",
    icon: "/icons/icon-benefits-2.svg",
    title: "Aids Skin & Eye Health",
    description:
      "Rich in beta-carotene and other nutrients that support healthy skin and eyes.",
    keypoints: [
      "Supports healthy skin and eyes.",
      "Promotes cellular health.",
      "Contains beta-carotene for eye health.",
    ],
  },
  {
    image: "/images/img-benefits-3.webp",
    icon: "/icons/icon-benefits-3.svg",
    title: "Supports Healthy Cholesterol",
    description:
      "Naturally occurring phytonutrients help maintain healthy cholesterol levels and liver function.",
    keypoints: [
      "Regulates neurons involved in attention and memory",
      "Supports healthy blood flow to the brain",
      "Reduces brain fog and improves overall cognitive function",
    ],
  },
] as const;

export function HealthBenefits() {
  return (
    <section className="relative mx-auto max-w-xl space-y-2 pt-32 text-center lg:max-w-full">
      <h3 className="pb-2 text-xl font-bold text-brand-maroon sm:text-2xl">
        Key Health Benefits
      </h3>
      <p className="text-3xl font-bold sm:text-5xl">
        Comprehensive Health
        <br />
        Support in Every Scoop
      </p>
      <p className="mx-auto max-w-[60ch] text-pretty leading-relaxed sm:text-lg">
        Our Nitric Oxide Beets are designed to support a wide range of health
        benefits, ensuring you feel your best every day.
      </p>
      <ul className="grid grid-cols-1 gap-4 pt-10 lg:grid-cols-3">
        {benefits.map(({ title, image, icon, description, keypoints }) => (
          <li
            key={title}
            className="relative rounded-lg bg-brand-green text-start text-white"
          >
            <img
              className="min-h-64 rounded-t-xl object-cover object-center"
              src={image}
              alt={title}
            />
            <div className="absolute mx-4 -translate-y-1/2 rounded-xl bg-white p-2">
              <img src={icon} alt="icon" />
            </div>
            <div className="space-y-4 px-4 py-16">
              <h4 className="text-xl font-bold sm:text-2xl">{title}</h4>
              <p className="text-lg leading-relaxed">{description}</p>
              <ul className="text-lg leading-relaxed">
                {keypoints.map((keypoint) => (
                  <li key={keypoint}>{`- ${keypoint}`}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <div className="grid justify-items-center gap-y-6">
        <p className="pt-16 text-xl font-semibold sm:text-4xl">
          Try Eco Health® Advance Urinary Formula Risk Free for 90 Days
        </p>
        <CartBadge />
        <AddToCartButton />
        <OffersBadge />
      </div>
    </section>
  );
}
