import { IoIosCloseCircle } from "react-icons/io";
import { config } from "../config";

export function TheProblem() {
  return (
    <section className=" mx-auto mb-20 max-w-md lg:max-w-6xl p-fit">
      <h2 className="title">
        The Problem
      </h2>
      <p className="mx-auto max-w-[65ch] text-pretty px-2 pb-8 text-center font-semibold leading-relaxed md:text-lg">
      As we age, the intricate network of muscles surrounding the bladder weakens often leading these problems.
      </p>
      <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:items-center">
        <img
          className="rounded-lg"
          src="/images/problem.png"
          alt="problem section image"
        />
        <ul className="space-y-4 text-start md:space-y-6">
          {config.problems.map((problem) => (
            <li
              key={problem}
              className="flex items-start gap-x-2 text-pretty leading-relaxed"
            >
              <span>
                <IoIosCloseCircle className="size-9 text-maroon" />
              </span>
              <p className="text-xl md:text-2xl">{problem}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
