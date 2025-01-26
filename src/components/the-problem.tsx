import { IoIosCloseCircle } from "react-icons/io";
import { config } from "../config";

export function TheProblem() {
  return (
    <section className="p-fit mx-auto secGap  max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-7xl ">
      <h2 className="title text-brand-maroon">BYE BYE BLADDER </h2>
      <p className="mx-auto max-w-[65ch] text-pretty px-2 pb-6 lg:pb-0 text-center font-semibold leading-relaxed md:text-lg">
      Accidents - Discomfort - Leaks - Embarrassment

      </p>
      <div className="grid gap-6 mt-2 md:mt-12 lg:gap-8 lg:grid-cols-2 lg:items-center justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
      <img
          className="rounded-lg w-[70%] md:w-[82%] border md:h-[95%] mx-auto"
          src="/images/girl.png"
          alt="problem section image"
        />
        <img
          className="rounded-lg w-full md:w-[100%] h-full md:h-[95%] mx-auto"
          src="/images/problem.png"
          alt="problem section image"
        />
        </div>
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
