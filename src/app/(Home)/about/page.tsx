"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const About = () => {
  const visionArr = [
    {
      id: 1,
      title: "Collaboration",
      desc: "We believe wellness thrives in community. We build partnerships that amplify impact and foster shared growth.",
      image: "/assets/icons/TogetherBullet.svg",
    },
    {
      id: 2,
      title: "Education & Self-Empowerment",
      desc: "Knowledge is a form of healing. We equip people with the tools to take control of their health and make informed choices.",
      image: "/assets/icons/TogetherBullet.svg",
    },
    {
      id: 3,
      title: "Empathy",
      desc: "We lead with compassion, honoring each person’s journey with sensitivity and care.",
      image: "/assets/icons/TogetherBullet.svg",
    },
    {
      id: 4,
      title: "Research & Innovation",
      desc: "We blend science with tradition to deliver solutions that are evidence-based and culturally rooted.",
      image: "/assets/icons/TogetherBullet.svg",
    },
    {
      id: 5,
      title: "Sustainability",
      desc: "We focus on lasting impact, prioritizing long-term health, ethical practices, and environmental responsibility.",
      image: "/assets/icons/TogetherBullet.svg",
    },
  ];
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="bg-[url(/assets/about.jpg)] bg-cover bg-center  bg-no-repeat h-[70vh] ">
          <div className="bg-black/60 h-[70vh] w-full">
            <div className="flex  items-center justify-center xl:px-24 lg:px-16 px-7 h-[70vh] text-white sm:text-xl   uppercase ">
              <div className="grid">
                <div className="flex flex-col items-center"></div>
                <div className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl  uppercase mt-8">
                  <p>About us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Section */}
        <div className="md:px-24 px-6 grid md:grid-cols-2 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-primary flex flex-col justify-center"
          >
            <h3 className="text-2xl ">Who We Are</h3>
            <p className="mt-3">
              We are a female-led holistic wellness company that provides
              personalized health consulting, business development services, and
              wellness education for individuals, wellness entrepreneurs, and
              corporate organizations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/assets/imageery.jpg"
              alt="About Image"
              width={400}
              height={500}
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
        <div className="bg-primary/20 grid md:grid-cols-2 mt-5">
          <div className=" md:pt-0 py-14 md:px-24 px-6 text-lg text-primary flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl "
            >
              What We Do
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-3"
            >
              Our tailored wellness programs enable people to optimize their
              health, manage stress, prevent illness, and live with vitality,
              through data-driven solutions that blend modern science with
              indigenous African wellness practices.
            </motion.p>
          </div>
          <div>
            <Image
              src="/assets/about-home.png"
              alt="About Image"
              width={1000}
              height={500}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="m-0">
        <div className="grid lg:grid-cols-2   ">
          <div className="md:pt-20 pt-14 md:px-20 px-6 lg:pb-0 pb-6">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl mt-3 font-semibold text-primary"
            >
              Our Mission
              <br /> and Vision
            </motion.h3>

            <div className="grid gap-6 mt-6 text-primary">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-lg"
              >
                Our mission is to transform wellness in Africa by offering
                innovative, integrative solutions that nurture holistic health,
                empower communities, and inspire transformative lifestyles.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-lg"
              >
                Our Vision is to be Africa&apos;s foremost provider of
                integrative and preventative wellness solutions, inspiring
                transformative journeys and fostering holistic well-being across
                the continent.
              </motion.p>
            </div>
          </div>

          <div>
            <Image
              src="/assets/mission.jpg"
              alt="image"
              width="1000"
              height="500"
            />
          </div>
        </div>
      </div>

      <div className="m-0 text-primary ">
        <div className="grid lg:grid-cols-2 bg-primary/25">
          <div className=" pt-10 md:px-20 px-6 lg:pb-0 pb-10">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="sm:text-4xl text-3xl  font-semibold"
            >
              Our Values
            </motion.h3>

            <div className="grid gap-6 mt-3 ">
              {visionArr?.map((vision) => (
                <div
                  key={vision?.id}
                  // initial={{ opacity: 0, y: 50 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // transition={{
                  //   duration: 0.6,
                  //   ease: "easeOut",
                  //   delay: 0.3 + index * 0.1,
                  // }}
                  // viewport={{ once: true, amount: 0.3 }}
                  className=""
                >
                  <div className="">
                    <motion.h3
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="font-medium"
                    >
                      {vision?.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-xs "
                  >
                    {vision?.desc}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Image
              src="/assets/bgImage3.jpg"
              alt="image"
              width="1000"
              height="500"
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-100/20 md:flex justify-center sm:px-16 px-6 items-center py-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="px-10"
        >
          <Image
            src="/assets/icons/Tahwil 2.svg"
            alt="image"
            width="200"
            height="300"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="pt-20 md:px-10 md:pl-20 px-3 pb-6 md:w-[70%] text-primary"
        >
          <h3
            // initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            // viewport={{ once: true, amount: 0.3 }}
            className="text-4xl font-semibold"
          >
            Our Philosophy
          </h3>
          <div className="grid gap-5 mt-7">
            <p className="text-sm">
              At Tahwil, we believe wellness is a shared responsibility. That’s
              why we’re building Africa’s first fully integrated wellness
              ecosystem, a collaborative platform that supports connection,
              resource sharing, and long-term impact. Our vision is bold: to
              bring African wellness to the global stage, reviving indigenous
              knowledge and shaping a new blueprint for how the world heals and
              thrives
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
