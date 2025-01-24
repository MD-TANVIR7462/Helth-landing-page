function HaveAquestion() {
  return (
    <div className="relative mx-auto w-full bg-[url(/images/calltoactionbg.png)] text-white">
      <div className="container relative mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left section with text */}
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold leading-tight md:text-3xl">
                  Have Questions? We're Here to Help!
                </h1>
                <p className="text-2xl md:text-3xl">
                  Call us at (000) 000-0000 for answers.
                </p>
              </div>

              <div className="space-y-3">
                <p className="max-w-[400px] text-xl md:text-2xl">
                  Act quickly—these are selling fast! 🔥 XX sold in the past
                  hour.
                </p>
                <p className="max-w-[400px] text-[18px] leading-8 md:text-[22px]">
                  Stock is limited due to high demand, so availability cannot be
                  guaranteed.
                </p>
              </div>
              <button className="rounded-full bg-[#B11E54] px-6 py-3 text-sm font-semibold text-white sm:px-8 sm:py-4 sm:text-base md:px-16 md:text-lg">
                Claim It Before It's Gone!
              </button>
            </div>

            {/* Right section with image */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-square">
                <img
                  src="/images/call.jpg"
                  className="h-full w-full rounded-full object-cover"
                  alt="Image"
                />
                {/* Circle at the top-right corner */}
                <div className="absolute right-[8%] md:right-[16%] top-4 z-10 h-16 w-16 rounded-full bg-brand-maroon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HaveAquestion;
