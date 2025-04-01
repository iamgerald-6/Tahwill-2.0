import Image from "next/image";

const About = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="bg-[url(/assets/about.jpg)] bg-cover bg-center  bg-no-repeat h-[75vh] ">
          <div className="bg-black/60 h-[75vh] w-full">
            <div className="flex  items-center justify-center xl:px-24 lg:px-16 px-7 h-[75vh] text-white sm:text-xl   uppercase ">
              <div className="grid">
                <div className="flex flex-col items-center">
                  <p>Know more</p>
                </div>
                <div className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl  uppercase mt-8">
                  <p>About us</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-16 pb-10 px-10 grid md:grid-cols-3 gap-16">
          <div>
            <span className="text-primary text-3xl font-semibold">Mission</span>
            <p className="md:w-[80%] text-primary text-lg mt-4 font-medium">
              We transform wellness in Africa by offering innovative,
              integrative solutions that nurture holistic health, empower
              communities, and inspire transformative lifestyles.
            </p>
          </div>
          <div>
            <Image
              src={"/assets/mission.png"}
              alt="About Image"
              width={300}
              height={100}
            />
          </div>
          {/* Stats Section */}
          <div className="flex flex-col md:items-center md:text-center ">
            <span className="text-primary text-3xl font-semibold">
              Our Vision
            </span>
            <p className="text-primary text-lg mt-4 max-w-xs">
              Tahwill strives to be Africa&apos;s foremost provider of
              integrative and preventative wellness solutions, inspiring
              transformative journeys and fostering holistic well-being across
              the continent.
            </p>
          </div>
        </div>

        {/* About Us Section with Image */}
        <div className="mt-14  grid md:grid-cols-2 gap-16 bg-[#E9ECF3]">
          <div>
            <Image
              src={"/assets/problem.png"}
              alt="About Image"
              width={600}
              height={500}
            />
          </div>
          <div className="relative md:mt-14 md:px-0 px-8 pb-8">
            <span className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent text-2xl font-semibold">
              Problem
            </span>
            <p className="md:w-[80%] text-primary text-lg md:mt-3 font-medium">
              Many individuals and businesses struggle to find personalized,
              effective wellness solutions that address their unique needs.
              Generic approaches often fail to deliver lasting health
              improvements, while businesses lack the right strategies to
              integrate wellness effectively. Tahwil bridges this gap with
              tailored, data-driven solutions, fostering a connected wellness
              ecosystem across Nigeria and Africa.
            </p>
          </div>
        </div>

        {/* Centered Image & Text Section */}
        <div className="flex flex-col justify-center mt-6 items-center text-center px-6">
          {/* Centered Image */}
          <Image
            src="/assets/icons/Tahwil 2.svg"
            alt="Tahwil Logo"
            width={300}
            height={300}
            className="max-w-full h-auto mb-6"
          />

          {/* Centered Text */}
          <p className="max-w-2xl text-lg text-gray-700">
            We provide expert wellness solutions tailored for individuals,
            businesses, and wellness entrepreneurs. Our personalized approach
            includes health assessments, customized nutrition and fitness plans,
            and stress management strategies to enhance well-being.
          </p>
          <p className="max-w-2xl text-lg text-gray-700 mt-6">
            For businesses, we develop workplace wellness programs, conduct
            productivity assessments, and offer tailored workshops to create
            healthier, more engaged teams. We also support wellness
            entrepreneurs with strategic consulting and data-driven growth
            solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
