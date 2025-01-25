import { config } from "../config";

export function WhyUrinaryFormula() {
  return (
    <section className="relative overflow-hidden bg-[#FAF3E1] py-8 md:py-16">
      <h3 className="text-maroon text-balance pb-4 text-center text-[26px] font-black  md:text-4xl">Why Advance Urinary Formula?</h3>
      <p className="text-semibold text-balance pb-4 text-center text-2xl text-black md:text-[34px]">
        Harness the Power of Advance
        <br />
        Urinary Formula
      </p>
      <p className="mx-auto max-w-[65ch] text-pretty  text-center font-semibold leading-relaxed text-black md:text-xl px-3">
        Becasue it's A Guaranteed Remedy that helps RE-BUILD your bladder
        muscles from the Inside out.
      </p>
      <div className="absolute inset-0 mt-5 bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="mx-auto mt-8 max-w-7xl px-4">
        <div className="relative grid items-center gap-8 md:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-white/50 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-orange-100/40 blur-3xl"></div>
            <div className="relative aspect-square">
              <img
                src="/images/multiple-bottle.png"
                alt="Urinary Formula Product"
                className="relative z-10 h-full w-full object-cover"
              />
              <div className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white px-6 py-2 shadow-lg">
                <p className="text-sm font-bold text-[#8e2253]">
                  Over Half A Million Sold! ⭐
                </p>
              </div>
            </div>
          </div>
          <div className="z-10 space-y-8">
            {config.whyUrinaryFormula.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="text-bold flex h-12 w-12 items-center justify-center rounded-full border border-brand-maroon bg-white shadow-sm">
                    <img src={item.icon} alt={item.title} className="h-7 w-7" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#8e2253]">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
