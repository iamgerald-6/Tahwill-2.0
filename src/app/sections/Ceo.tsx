import Image from 'next/image'
import React from 'react'

const Ceo = () => {
  return (
    <div className="bg-primary-400">
      <div className="xl:px-24 lg:px-16 py-10 grid md:grid-cols-2 ">
        <div className="">
          <Image
            src={"/assets/ceo.png"}
            alt="ceo image"
            width={400}
            height={400}
          />
        </div>
        <div className="text-primary pt-16 md:w-[75%] md:px-0 px-8">
          <h3 className="text-3xl font-semibold">The CEO’s Story</h3>
          <p className="mt-4 text-xl ">
            This program completely transformed my
            <br /> approach to wellness! The expert guidance,
            <br /> personalized support, and engaging workshops helped me build
            healthier habits that actually stick. I feel more energized,
            focused,
            <br /> and in control of my well-being. Highly recommend!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ceo