import React from 'react'

const HeroService = () => {
  return (
    <div className="bg-[url(/assets/about.jpg)] bg-cover bg-center  bg-no-repeat h-[75vh] ">
      <div className="bg-black/60 h-[75vh] w-full ">
        <div className="flex  items-center justify-center xl:px-24 lg:px-16 px-7 h-[75vh] text-white sm:text-xl    ">
          <div className="grid">
            <div className="flex flex-col items-center text-center">
              <p>The services we offer </p>
            </div>
            <div className="text-white xl:text-5xl lg:text-4xl  text-4xl  uppercase mt-8">
              <p>Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroService