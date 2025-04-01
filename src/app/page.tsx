import About from "./sections/About";
import Ceo from "./sections/Ceo";
import Communities from "./sections/Communites";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Service from "./sections/Service";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-primary/5  via-primary-100/5 to-primary-200/5">
        <About />
      </div>
      <div>
        <Service />
      </div>
      <div className="mt-16">
        <Communities />
      </div>
      <div>
        <Ceo />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
