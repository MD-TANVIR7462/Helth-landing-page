function HaveAquestion() {
  return (
    <div className="secGap relative mx-auto w-full bg-[url(/images/calltoactionbg.png)] text-white">
      <div className="container relative mx-auto px-4 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center justify-items-center gap-12 lg:grid-cols-2 lg:justify-items-start">
            {/* Left section with text */}
            <div className="order-2 space-y-6 text-left lg:order-1">
              <div className="space-y-2">
                <h1 className="text-xl font-bold leading-tight md:text-3xl">
                  Have Questions? We're Here to Help!
                </h1>
                <p className="text-xl md:text-3xl">
                  Call us at <a href="tel:(844) -640-0728" className="text-green-500 ">(844) -640-0728</a> for answers.
                </p>
              </div>

              <div className="space-y-3">
                <p className="max-w-[400px] text-xl md:text-2xl">
                  Act quickly—these are selling fast! 🔥 43 sold in the past
                  hour.
                </p>
                <p className="max-w-[400px] text-[18px] leading-8 md:text-[22px]">
                  Stock is limited due to high demand, so availability cannot be
                  guaranteed.
                </p>
              </div>
              <button className="rounded-full bg-[#B11E54] px-6 py-3 text-sm font-bold text-white sm:px-8 sm:py-4 sm:text-base md:px-16 md:text-lg ">
                Claim It Before It's Gone!
              </button>
            </div>

            {/* Right section with image */}
            <div className="relative mx-auto w-[83%] md:w-full md:max-w-md lg:order-2 lg:max-w-lg">
              <div className="relative aspect-square">
                <img
                  src="/images/call.jpg"
                  className="h-full w-full rounded-full object-cover"
                  alt="Image"
                />
                {/* Circle at the top-right corner */}
                <div className="absolute right-[8%] top-4 z-10 h-16 w-16 rounded-full bg-brand-maroon md:right-[16%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HaveAquestion;
