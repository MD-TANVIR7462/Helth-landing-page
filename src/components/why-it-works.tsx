export function WhyItWorks() {
  return (
    <section className="p-fit mx-auto mb-20 max-w-7xl">
      <h2 className="title">Why It Works</h2>
      <h2 className="mx-auto max-w-[65ch] text-pretty px-2 pb-8 text-center font-semibold leading-relaxed md:text-lg">
        Eco Health® Advance Urinary Formula is a premium, doctor-formulated
        blend for bladder health and urinary comfort.
      </h2>
      <div className="mx-auto mt-2 grid gap-8 lg:grid-cols-2 items-center">
        <img
          className="h-full rounded-lg object-cover object-center lg:row-span-2"
          src="/images/img-why-it-works-section.webp"
          alt=""
        />
        <div>
          <h3 className="pb-2 text-2xl font-bold sm:text-3xl lg:pb-4">
            Advanced Urinary Formula
          </h3>
          <p className="text-pretty leading-relaxed">
            is expertly crafted to provide comprehensive support for bladder
            health and urinary function. This premium, doctor- formulated blend
            combines clinically supported ingredients that work synergistically
            to enhance bladder control and promote urinary comfort.
          </p>
        </div>
        <div className="lg:col-start-2">
          <h3 className="pb-2 text-2xl font-bold sm:text-3xl lg:pb-4">
            Doctor Formulated and Premium Ingredients
          </h3>
          <p className="text-pretty leading-relaxed">
            Our formula is developed by leading health professionals, ensuring
            that each component is of the highest quality and efficacy. We
            utilize premium ingredients carefully selected based on rigorous
            scientific research and clinical studies.
          </p>
        </div>
      </div>
    </section>
  );
}
