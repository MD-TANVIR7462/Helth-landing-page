import { config } from "../config";


export function WhyUrinaryFormula() {
  return (
    <section className="relative overflow-hidden bg-[#FAF3E1] py-16 ">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative grid items-center gap-8 md:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-white/50 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-orange-100/40 blur-3xl"></div>
            <div className="relative aspect-square">
              <img
                src="/public/images/multiple-bottle.png"
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
                  <div className="flex h-12 w-12 items-center text-bold border border-brand-maroon justify-center rounded-full bg-white shadow-sm">
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
