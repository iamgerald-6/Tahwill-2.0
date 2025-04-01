import Image from "next/image";
import React from "react";

const WhatweDo = () => {
  //
  return (
    <div className="mt-43">
      <div className="bg-primary/10  py-4 px-10 ">
        <div className="grid md:grid-cols-2 gap-2 ">
          <div className="md:mt-[-45px]">
            {" "}
            <Image
              src={"/assets/imageery.jpg"}
              alt="About Image"
              width={600}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center gap-3 text-primary">
            <h3 className="text-4xl font-semibold">
              Empower
              <br className="md:block hidden" />
              Your Wellness
            </h3>
            <p className="text-primary md:w-[75%] text-lg ms-9">
              Discover how Tahwill empowers your wellness journey
              <br className="md:block hidden" /> through innovative features and
              personalized experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatweDo;
