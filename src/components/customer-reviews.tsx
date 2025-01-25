import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { IoIosCheckmark, IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";

const reviews = [
  {
    user_name: " Linda R.",
    isVerified: true,
    ratings: 5,
    title:
      "Overactive Bladder Relief Story",
    review:
      "I never thought I’d find something that could stop those constant bathroom trips. Eco Health’s Advanced Urinary Formula truly changed my life—I finally feel free from bladder issues!"
,
    img: "/images/old-man-1.jpeg",
  },
  {
    user_name: "Emily C.",
    isVerified: true,
    ratings: 5,
    title:
      " Improved Confidence in Social Settings",
    review:
      "I used to avoid social outings because I was afraid of constant interruptions from my bladder. Now, I can enjoy time with friends and family without worrying about running to the bathroom!",
    img: "/images/old-man-2.jpeg",
  },
  {
    user_name: "Susan T.",
    isVerified: true,
    ratings: 5,
    title:
      "Improved Sleep and Confidence",
    review:
      "For years, I was up multiple times every night. Since starting Eco Health’s Advanced Urinary Formula, I finally sleep through the night—and wake up feeling refreshed!",

    img: "/images/old-women-1.jpeg",
  },
  {
    user_name: "James L.",
    isVerified: true,
    ratings: 5,
    title:
      "Freedom from Embarrassment (Active Lifestyle).",
    review:"Bladder issues used to hold me back from enjoying my favorite activities. Thanks to Eco Health’s Advanced Urinary Formula, I can work out and stay active without worry."
,
    img: "/images/old-women-2.jpeg",
  },
  // {
  //   user_name: "Melody O",
  //   isVerified: true,
  //   ratings: 5,
  //   title:
  //     "I loved it except I would like a 30 day supply in the box so that would be 30 packets.",
  //   review:
  //     "I loved it except I would like a months of the product rather than getting 6 worth.",
  //   img: "/images/old-women-3.jpeg",
  // },
] as const;

export function CustomerReviews() {
  return (
    <section className="relative mx-auto max-w-6xl space-y-2 p-4 text-center lg:p-6">
      <p className="mx-auto max-w-[60ch] text-2xl font-black leading-snug md:text-3xl lg:text-4xl">
        Trusted by Thousands of Customers
      </p>
      <p className="mx-auto max-w-[60ch] text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
        Hear from happy customers on how Nitric Oxide Organic Beets - Mixed
        Berry Flavor improved their life
      </p>
      <ul className="divide-y divide-gray-200 text-start md:pt-5">
        {reviews.map(({ title, review, ratings, user_name, img }, index) => (
          <li
            key={title + index}
            className="grid items-start gap-4 py-6 md:grid-cols-[auto_1fr] md:gap-8"
          >
            <div className="grid grid-cols-[auto_1fr] grid-rows-2 md:grid-rows-3 items-start  gap-x-4">
              <img
                className="row-span-2 row-start-1 h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
                src={img}
                alt={user_name}
              />
              <div className="pt-2">
                <h4 className="text-sm sm:text-lg font-semibold">{user_name}</h4>
                <div className="flex items-center gap-x-1 text-xs sm:text-sm">
                  <IoIosCheckmarkCircle className="size-4 text-[#1f8e2a]" />
                  <span>Verified Buyer</span>
                </div>
              </div>
              <p className="col-span-2 flex items-center text-xs md:py-2 md:text-sm">
                <IoIosCheckmark className="size-6 text-[#1f8e2a]" /> I recommend
                this product
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="flex items-center">
                  {Array.from({ length: ratings }).map((_, index) => (
                    <IoMdStar
                      className="size-5 text-[#e5c729] md:size-6 lg:size-7"
                      key={`star${index}`}
                    />
                  ))}
                </span>
                <span className="opacity-80">4 days ago</span>
              </div>
              <p className="text-base font-semibold sm:text-lg">{title}</p>
              <p className="text-sm sm:text-base">{review}</p>
              {/* <p className="text-xs sm:text-sm">
                Review left on: Nitric Oxide Organic Beets Single-Serve Packs
              </p> */}
              <div className="flex items-center gap-x-2 text-xs sm:text-sm">
                Was this review helpful? <BiSolidLike /> 0 <BiSolidDislike /> 0
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
