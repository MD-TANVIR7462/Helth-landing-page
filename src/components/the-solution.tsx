import { IoIosCheckmarkCircle } from "react-icons/io";
import { config } from "../config";

export function TheSolution() {
  return (
    <section className="p-fit mx-auto mb-16 max-w-md md:mb-20 lg:max-w-7xl">
      <h3 className="title">The Solution</h3>
      <p className="mx-auto max-w-[65ch] text-pretty px-2 pb-8 text-center font-semibold leading-relaxed md:text-lg">
        Bye, Buy Bladder Leaks, accidents, discomfort and worries with Eco
        Health's Advance Urinary Formula. Doctor Formulated with clincaly
        studied ingredients. Guaranteed to Work!
      </p>
      <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:items-center">
        <img
          className="rounded-lg  md:w-[92%] md:h-[84%] mx-auto"
          src="/images/solution.png"
          alt="solution section image"
        />
        <ul className="space-y-4 text-start md:space-y-6">
          {config.solutions.map((solution) => (
            <li
              key={solution}
              className="flex items-start gap-x-2 text-pretty leading-relaxed"
            >
              <span>
                <IoIosCheckmarkCircle className="size-9 text-[#1f8e2a]" />
              </span>
              <p className="text-xl md:text-2xl">{solution}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
