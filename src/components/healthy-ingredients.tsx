import { AddToCartButton } from "./add-to-cart-button";
import { SalesBadge } from "./sales-badge";

const ingredients = [
  {
    name: "Organic Beetroot",
    image: "/images/img-ingredient-1.jpg",
    description:
      "Rich in dietary nitrates and antioxidants, our beetroot aids in blood circulation, supports healthy blood pressure, and provides cellular protection.",
    keywords: ["Blood Pressure", "Circulation", "Energy"],
    keypoints: [
      "Promotes healthy blood circulation.",
      "Supports balanced blood pressure.",
      "Enhances digestive health and cellular protection.",
    ],
  },
  {
    name: "Oxystorm®",
    image: "/images/img-ingredient-1.jpg",
    description:
      "OXYSTORM® is a standardized extract of red spinach. Supplementing daily can aid optimal tissue supply and support healthy blood flow and heart health.*",
    keywords: ["Blood Pressure", "Circulation", "Energy"],
    keypoints: [
      "Provides a consistent nitrate supply.",
      "Supports healthy blood flow.",
      "Aids optimal tissue supply and heart health.",
    ],
  },
  {
    name: "Pomegranates",
    image: "/images/img-ingredient-1.jpg",
    description:
      "Pomegranates shield against oxidative stress, helping to protect heart and brain health. Their rich antioxidant content bolsters your body’s defenses for enhanced health and longevity.*",
    keywords: ["Antioxidants", "Brain Health", "Heart Health"],
    keypoints: [
      "Shields against oxidative stress.",
      "Supports brain function and longevity.",
      "Enhances cardiovascular health.",
    ],
  },
] as const;

export function HealthyIngredients() {
  return (
    <section className="relative mx-auto max-w-xl space-y-2 pt-32 text-center lg:max-w-full">
      <h3 className="pb-2 text-xl font-bold text-brand-maroon sm:text-2xl">
        Heart Healthy Ingredients
      </h3>
      <p className="text-3xl font-bold sm:text-5xl">
        The Powerful Ingredients That Fuel Your Heart
      </p>
      <p className="mx-auto max-w-[60ch] text-pretty leading-relaxed sm:text-lg">
        Our Nitric Oxide Beets is crafted using nature’s most potent ingredients
        to enhance your health and vitality. Each one is chosen to optimize
        blood flow, support cardiovascular health, and boost overall wellness.
      </p>
      <img
        className="mx-auto"
        src="/images/img-ingredients.webp"
        alt="ingredients image"
      />
      <div className="relative -top-[10%] z-10">
        <ul className="grid grid-cols-1 gap-6 pt-10 lg:grid-cols-3">
          {ingredients.map(
            ({ name, image, description, keywords, keypoints }, index) => (
              <li
                key={name}
                className="relative space-y-6 rounded-lg border bg-white p-4 text-start shadow"
              >
                <div className="cote grid grid-cols-[1fr_auto] items-start gap-x-10">
                  <span className="text-sm font-bold italic text-brand-maroon">
                    Active Ingredient {index + 1}
                  </span>
                  <h4 className="row-[2/3] text-3xl font-bold">{name}</h4>
                  <img
                    className="row-[1/3] size-14 rounded-xl object-cover object-center"
                    src={image}
                    alt={name}
                  />
                </div>
                <p className="test-sm leading-relaxed opacity-80">
                  {description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {keywords.map((keyword) => (
                    <li
                      key={keyword}
                      className="rounded-full border border-brand-green px-2 py-1 text-sm font-bold text-brand-green"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4 font-bold">
                  {keypoints.map((keypoint) => (
                    <li key={keypoint}>{`- ${keypoint}`}</li>
                  ))}
                </ul>
              </li>
            ),
          )}
        </ul>
        <div className="grid justify-items-center gap-y-6">
          <p className="pt-16 text-xl font-semibold sm:text-4xl">
            Harness the power of nature’s best ingredients to fuel your heart
            with one simple scoop.
          </p>
          <SalesBadge />
          <AddToCartButton />
        </div>
      </div>
    </section>
  );
}
