import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { IoIosCheckmark, IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";

const reviews = [
  {
    user_name: "Melody O",
    isVerified: true,
    ratings: 5,
    title:
      "I loved it except I would like a 30 day supply in the box so that would be 30 packets.",
    review:
      "I loved it except I would like a months of the product rather than getting 6 worth.",
  },
  {
    user_name: "Melody O",
    isVerified: true,
    ratings: 5,
    title:
      "I loved it except I would like a 30 day supply in the box so that would be 30 packets.",
    review:
      "I loved it except I would like a months of the product rather than getting 6 worth.",
  },
  {
    user_name: "Melody O",
    isVerified: true,
    ratings: 5,
    title:
      "I loved it except I would like a 30 day supply in the box so that would be 30 packets.",
    review:
      "I loved it except I would like a months of the product rather than getting 6 worth.",
  },
  {
    user_name: "Melody O",
    isVerified: true,
    ratings: 5,
    title:
      "I loved it except I would like a 30 day supply in the box so that would be 30 packets.",
    review:
      "I loved it except I would like a months of the product rather than getting 6 worth.",
  },
  {
    user_name: "Melody O",
    isVerified: true,
    ratings: 5,
    title:
      "I loved it except I would like a 30 day supply in the box so that would be 30 packets.",
    review:
      "I loved it except I would like a months of the product rather than getting 6 worth.",
  },
  {
    user_name: "Melody O",
    isVerified: true,
    ratings: 5,
    title:
      "I loved it except I would like a 30 day supply in the box so that would be 30 packets.",
    review:
      "I loved it except I would like a months of the product rather than getting 6 worth.",
  },
] as const;

export function CustomerReviews() {
  return (
    <section className="relative mx-auto space-y-4 pt-32 text-center lg:max-w-full">
      <h3 className="pb-2 text-xl font-bold text-brand-maroon sm:text-2xl">
        Customer Reviews
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-x-4 font-bold md:py-1 md:text-3xl">
        <span className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <IoMdStar
              className="-ms-1 size-8 text-[#e5c729]"
              key={`star${index}`}
            />
          ))}
        </span>
        <span>4.7/5 stars</span>
      </div>
      <p className="text-3xl font-bold sm:text-6xl">
        Trusted by Thousands of Customers
      </p>
      <p className="mx-auto max-w-[60ch] text-pretty font-semibold leading-relaxed sm:text-lg">
        Hear from happy customers on how Nitric Oxide Organic Beets - Mixed
        Berry Flavor improved their life
      </p>
      <ul className="grid grid-cols-2 gap-4 pt-10 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <li
            key={`video${index}`}
            className="h-[28rem] rounded-lg bg-black"
          ></li>
        ))}
      </ul>
      <ul className="divide-y-2 text-start">
        {reviews.map(({ title, review, ratings, user_name }, index) => (
          <li
            key={title + index}
            className="grid items-start gap-4 py-10 md:grid-cols-[auto_1fr] md:gap-10"
          >
            <div className="grid grid-cols-[auto_1fr] grid-rows-3 items-start gap-x-4">
              <div className="row-span-2 row-start-1 flex size-16 items-center justify-center rounded-full bg-orange-600 text-3xl text-white">
                MO
              </div>
              <div className="pt-2">
                <h4>{user_name}</h4>
                <div className="flex items-center gap-x-1 text-sm">
                  <IoIosCheckmarkCircle className="size-4 text-[#1f8e2a]" />
                  <span>Verified Buyer</span>
                </div>
              </div>
              <p className="col-span-2 flex items-center py-4">
                <IoIosCheckmark className="size-7 text-[#1f8e2a]" /> I recommend
                this product
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  {Array.from({ length: ratings }).map((_, index) => (
                    <IoMdStar
                      className="-ms-1 size-7 text-[#e5c729]"
                      key={`star${index}`}
                    />
                  ))}
                </span>
                <span className="text-sm opacity-80">4 days ago</span>
              </div>
              <p className="text-xl font-semibold">{title}</p>
              <p>{review}</p>
              <p className="text-sm">
                Review left on: Nitric Oxide Organic Beets Single-Serve Packs
              </p>
              <div className="flex items-center gap-x-2 text-sm">
                Was this review helpful? <BiSolidLike /> 0 <BiSolidDislike /> 0
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
