import Image from "next/image"


const About = () => {
  return (
    <div className="mt-16 pb-10 ">
      <div className="grid grid-cols-2 gap-16 xl:px-24 lg:px-16   ">
        <div>
          <Image
            src={"/assets/about-home.png"}
            alt="about image"
            width={600}
            height={500}
          />
        </div>
        {/* <div> */}
        <div className="relative ">
          <span className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent text-xl font-semibold">
            About us
          </span>

          <h3 className="text-5xl text-primary font-medium mt-2">
            Empowering Wellness,
            <br className="hidden md:block" /> Transforming Lives
          </h3>
          <p className="w-[80%] text-primary text-xl mt-3 font-medium">
            We design personalized wellness solutions, combining science, data,
            and culture to drive lasting health and well-being for individuals
            and businesses.
          </p>
          <div className="bg-primary-400 w-[80%] flex justify-around mt-7 py-5">
            <div className=" text-primary grid">
              <span className="bg-gradient-to-b from-primary to-primary-200 bg-clip-text text-transparent text-3xl font-semibold text-center">
                2020
              </span>

              <span className="text-xl">Established</span>
            </div>
            <div className="text-primary grid">
              <span className="bg-gradient-to-b from-primary to-primary-200 bg-clip-text text-transparent text-3xl font-semibold text-center">
                100+
              </span>
              <span className="text-xl">Happy Clients</span>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default About