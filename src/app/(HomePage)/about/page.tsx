import Image from "next/image";

const About = () => {
  return (
    <>
   

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="">
         
          <div className="  bg-black/60 rounded-br-[80px]" />
          <div className="relative flex items-center justify-center xl:px-24 lg:px-16 px-7 min-h-screen text-white sm:text-xl uppercase text-center">
            <div>
              <p>
                <span className="bg-gradient-to-r from-primary via-primary-100 to-primary-200 bg-clip-text text-transparent">
                  Data-driven solutions,
                </span>{" "}
                expert guidance, and tailored programs to help you achieve
                lasting health and vitality.
              </p>
              <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl uppercase mt-5">
                Redefining{" "}
                <span className="bg-gradient-to-r from-primary via-primary-100 to-primary-200 bg-clip-text text-transparent">
                  Wellness
                </span>
                : Community, Education & Holistic Healing Solutions
              </h1>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-16 pb-10 px-10 grid grid-cols-3 gap-16">
          <div>
            <span className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent text-2xl font-semibold">
              Mission
            </span>
            <p className="w-[80%] text-primary text-2xl mt-4 font-medium">
              We provide expert wellness solutions, corporate programs,
              sustainable nutrition, and business support to promote lasting
              health and growth.
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
          <div className="flex flex-col items-center text-center mt-7">
            <span className="text-primary text-3xl font-semibold">
              Our Vision
            </span>
            <p className="text-primary text-xl mt-4 max-w-xs">
              We design personalized wellness solutions, combining science, data,
              and culture to drive lasting health and well-being for individuals
              and businesses.
            </p>
          </div>
        </div>

        {/* About Us Section with Image */}
        <div className="mt-14  grid grid-cols-2 gap-16 bg-[#E9ECF3]">
          <div>
            <Image
              src={"/assets/problem.png"}
              alt="About Image"
              width={600}
              height={500}
            />
          </div>
          <div className="relative mt-14">
            <span className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent text-2xl font-semibold">
              Problem
            </span>
            <p className="w-[80%] text-primary text-2xl mt-3 font-medium">
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
        <div className="flex flex-col justify-center items-center h-screen text-center px-6">
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
            healthier, more engaged teams. We also support wellness entrepreneurs
            with strategic consulting and data-driven growth solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
