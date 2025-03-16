import About from "./components/About";
import Ceo from "./components/Ceo";
import Communities from "./components/Communites";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Service from "./components/Service";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
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
