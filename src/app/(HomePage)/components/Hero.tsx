

const Hero = () => {
  return (
    <div className="bg-[url(/assets/bgImage.jpg)] bg-cover bg-center rounded-br-[80px] bg-no-repeat min-h-[100vh] ">
      <div className="bg-black/60 min-h-[100vh] w-full rounded-br-[80px]">
        <div className="flex  items-center justify-center xl:px-24 lg:px-16 px-7 h-[100vh] text-white sm:text-xl   uppercase ">
          <div className="grid">
            <div className="lg:flex lg:flex-col lg:items-center">
              <p>
                <span className="bg-gradient-to-r from-primary via-primary-100 to-primary-200 bg-clip-text text-transparent">
                  Data-driven solutions,
                </span>{" "}
                expert guidance, and
                <br className="hidden sm:block" /> tailored programs to help you
                achieve lasting
                <br /> health and vitality.
              </p>
            </div>
            <div className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl  uppercase mt-8">
              <p>
                Redefining{" "}
                <span className="bg-gradient-to-r from-primary via-primary-100 to-primary-200 bg-clip-text text-transparent">
                  Wellness
                </span>
                : Community,
                <br /> Education & Holistic Healing solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero