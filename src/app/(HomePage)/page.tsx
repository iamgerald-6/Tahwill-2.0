import About from "./components/About";
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
    </>
  );
};

export default Home;
