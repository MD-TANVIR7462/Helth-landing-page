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
    img: "/images/old-man-1.jpeg",
  },
  {
    user_name: "Melody O",
    isVerified: true,
    ratings: 5,
    title:
      "I loved it except I would like a 30 day supply in the box so that would be 30 packets.",
    review:
      "I loved it except I would like a months of the product rather than getting 6 worth.",
    img: "/images/old-man-2.jpeg",
  },
  {
    user_name: "Melody O",
    isVerified: true,
    ratings: 5,
    title:
      "I loved it except I would like a 30 day supply in the box so that would be 30 packets.",
    review:
      "I loved it except I would like a months of the product rather than getting 6 worth.",
    img: "/images/old-women-1.jpeg",
  },
  {
    user_name: "Melody O",
    isVerified: true,
    ratings: 5,
    title:
      "I loved it except I would like a 30 day supply in the box so that would be 30 packets.",
    review:
      "I loved it except I would like a months of the product rather than getting 6 worth.",
    img: "/images/old-women-2.jpeg",
  },
  {
    user_name: "Melody O",
    isVerified: true,
    ratings: 5,
    title:
      "I loved it except I would like a 30 day supply in the box so that would be 30 packets.",
    review:
      "I loved it except I would like a months of the product rather than getting 6 worth.",
    img: "/images/old-women-3.jpeg",
  },
] as const;

export function CustomerReviews() {
  return (
    <section className="relative mx-auto max-w-6xl space-y-4 pt-32 text-center p-fit">
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
      <ul className="divide-y-2 pt-10 text-start">
        {reviews.map(({ title, review, ratings, user_name, img }, index) => (
          <li
            key={title + index}
            className="grid items-start gap-4 py-10 md:grid-cols-[auto_1fr] md:gap-10"
          >
            <div className="grid grid-cols-[auto_1fr] grid-rows-3 items-start gap-x-4">
              <img
                className="row-span-2 row-start-1 flex size-16 items-center justify-center rounded-full object-cover"
                src={img}
              />
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
