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
            <span className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent text-2xl font-semibold">
              Mission
            </span>
            <p className="w-[80%] text-primary text-2xl mt-4 font-medium">
              We provide expert wellness solutions, corporate programs,
              sustainable nutrition, and business support to promote lasting
              health and growth.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/mission.png"
              alt="About Image"
              width={300}
              height={100}
              className="max-w-full h-auto"
            />
          </div>
          {/* Stats Section */}
          <div className="flex flex-col items-center text-center mt-7">
            <span className="text-primary text-3xl font-semibold">
              Our Vision
            </span>
            <p className="text-primary text-xl mt-4 max-w-xs">
              We design personalized wellness solutions, combining science,
              data, and culture to drive lasting health and well-being for
              individuals and businesses.
            </p>
          </div>
        </div>

        {/* About Us Section with Image */}
        <div className="mt-14  grid grid-cols-2 gap-16 bg-[#E9ECF3]">
          <div>
            <Image
              src="/assets/problem.png"
              alt="About Image"
              width={600}
              height={500}
              className="max-w-full h-auto"
            />
          </div>
          <div className="relative mt-14">
            <span className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent text-2xl font-semibold">
              Problem
            </span>
            <p className="w-[80%] text-primary text-2xl mt-3 font-medium">
              Many individuals and businesses struggle to find personalized,
              effective wellness solutions. Tahwil bridges this gap with
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
          <p className="max-w-2xl text-lg text-gray-700">
            We provide expert wellness solutions tailored for individuals,
            businesses, and wellness entrepreneurs.
          </p>
          <p className="max-w-2xl text-lg text-gray-700 mt-6">
            For businesses, we develop workplace wellness programs, conduct
            productivity assessments, and offer tailored workshops.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
