import { IoIosCloseCircle } from "react-icons/io";
import { config } from "../config";

export function TheProblem() {
  return (
    <section className="p-fit mx-auto secGap max-w-md lg:max-w-7xl">
      <h2 className="title text-brand-maroon">BYE BYE BLADDER </h2>
      <p className="mx-auto max-w-[65ch] text-pretty px-2 pb-6 lg:pb-0 text-center font-semibold leading-relaxed md:text-lg">
      Accidents - Discomfort - Leaks - Embarrassment

      </p>
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 lg:items-center">
        <img
          className="rounded-lg lg:w-[92%] lg:h-[82%] mx-auto"
          src="/images/problem.png"
          alt="problem section image"
        />
        <ul className="space-y-4 text-start md:space-y-6 ">
          {config.problems.map((problem) => (
            <li
              key={problem}
              className="flex  items-start gap-x-2 text-pretty leading-relaxed"
            >
              <span>
                <IoIosCloseCircle className="text-maroon size-10" />
              </span>
              <p className="text-xl md:text-2xl">{problem}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
