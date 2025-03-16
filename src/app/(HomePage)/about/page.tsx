import Image from "next/image";

const About = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="bg-[url(/assets/about.jpg)] bg-cover bg-center rounded-br-[80px] bg-no-repeat h-[75vh]">
          <div className="bg-black/60 h-[75vh] w-full rounded-br-[80px] flex items-center justify-center text-white sm:text-xl uppercase px-4">
            <div className="text-center">
              <p className="lg:text-xl text-lg">Know more</p>
              <p className="text-white xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase mt-4">
                About us
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-12 pb-10 px-6 md:px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <span className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent text-4xl font-semibold">
              Mission
            </span>
            <p className="text-primary text-xl mt-4 font-medium">
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
          <div className="flex flex-col items-center text-center">
            <span className="text-primary text-3xl font-semibold">
              Our Vision
            </span>
            <p className="text-primary text-lg mt-4 max-w-xs">
              We design personalized wellness solutions, combining science,
              data, and culture to drive lasting health and well-being.
            </p>
          </div>
        </div>

        {/* About Us Section with Image */}
        <div className="mt-14 grid sm:grid-cols-1 md:grid-cols-2 gap-10 bg-[#E9ECF3] px-6 md:px-10">
          <div className="flex justify-center">
            <Image
              src="/assets/problem.png"
              alt="About Image"
              width={600}
              height={500}
              className="max-w-full h-auto"
            />
          </div>
          <div className="mt-10 md:mt-14">
            <span className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent text-2xl font-semibold">
              Problem
            </span>
            <p className="text-primary text-lg mt-3 font-medium">
              Many individuals and businesses struggle to find personalized,
              effective wellness solutions. Tahwil bridges this gap with
              tailored, data-driven solutions, fostering a connected wellness
              ecosystem across Nigeria and Africa.
            </p>
          </div>
        </div>

        {/* Centered Image & Text Section */}
        <div className="flex flex-col justify-center items-center h-auto py-20 text-center px-4 sm:px-6">
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
