import React from 'react'
import HeroService from "./components/HeroService";
// import WhatweDo from "./components/WhatweDo";
import Featured from "./components/Featured";
import Contact from "../sections/Contact";

const Service = () => {
  return (
    <>
      <div>
        <HeroService />
      </div>
      {/* <div>
        <WhatweDo />
      </div> */}
      <div>
        <Featured />
      </div>
      <div className="bg-primary-400 mt-14">
        <Contact />
      </div>
    </>
  );
};

export default Service;