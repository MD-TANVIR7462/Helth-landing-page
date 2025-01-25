const LandingSection = () => {
  const ingredients = [
    {
      id: 1,
      name: "Pumpkin Seed Extract",
      image: "/images/1.png",
      benefits: [
        "Strengthens pelvic floor muscles for better bladder control",
        "Increases urinary frequency and urgency by up to 40%",
        "Benefits observed after 12 weeks",
      ],
    },
    {
      id: 2,
      name: "Horsetail Extract",
      image: "/images/2.png",
      benefits: [
        "Enhances connective tissue integrity with silica",
        "Improves urinary flow and bladder function by 15%",
        "Effective after 4 weeks of use",
      ],
    },
    {
      id: 3,
      name: "Punarnava Extract",
      image: "/images/3.png",
      benefits: [
        "Supports kidney health and reduces fluid retention",
        "Promotes healthy urination patterns",
        "Relieves urinary frequency and discomfort",
      ],
    },
    {
      id: 4,
      name: "Soy Germ Extract",
      image: "/images/4.png",
      benefits: [
        "Isoflavones improve bladder strength and hormonal balance",
        "Reduces urinary issues in post-menopausal women",
        "Relieves bladder discomfort",
      ],
    },
    {
      id: 5,
      name: "Veld Grape Extract",
      image: "/images/5.png",
      benefits: [
        "Strengthens connective tissues for bladder health",
        "Reduces inflammation and irritation",
        "Improves bladder function progressively",
      ],
    },
    {
      id: 6,
      name: "Piperine",
      image: "/images/6.png",
      benefits: [
        "Boosts urinary health by reducing fluid retention",
        "Anti-inflammatory benefits for healthy urination",
        "Relieves urinary frequency",
      ],
    },
  ];
  return (
    <section className="bg-blueGray-50 relative mx-auto max-w-7xl bg-gray-100/30 secGap">
      <div className="min-h-screen-75 relative flex h-[400px] md:h-[550px] content-center items-center justify-center">
        <div
          className="absolute top-0 h-full w-full rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/heroimage.png')`,
          }}
        >
          <span
            id="blackOverlay"
            className="absolute h-full w-full rounded-3xl bg-black opacity-65"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
              <div className="">
                <h1 className="text-2xl md:text-4xl   font-semibold text-white">
                  NATURES BEST INGREDIENTS
                  <br />
                  Harness the power of nature’s best
                  <br />
                  ingredients
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-70-px pointer-events-none absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="bg-blueGray-200 -mt-24 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {ingredients.map((ingredi, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col rounded-2xl bg-white shadow-lg"
                >
                  <img
                    src={ingredi.image}
                    alt=""
                    className="z-10 h-40 w-full rounded-2xl object-cover"
                  />
                  <h6 className="pt-3 text-xl font-bold pl-3">{ingredi.name}</h6>
                  <p className="text-blueGray-500 mb-4 mt-2 p-4 text-start">
                    {ingredi.benefits.map((ben, index) => {
                      return (
                        <li 
                          style={{
                            listStylePosition: "inside",
                            paddingLeft: "1rem",
                            textIndent: "-1.5rem",
                            fontWeight: "500",
                          }}
                          key={index}
                        >
                          {ben}
                        </li>
                      );
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default LandingSection;
