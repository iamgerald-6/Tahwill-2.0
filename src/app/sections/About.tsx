import Image from "next/image";
import { Button } from "../components/Button";
import { ArrowUpRight } from "lucide-react";
const About = () => {
  return (
    <div className="pb-10 pt-20">
      <div className="grid md:grid-cols-3 gap-16 xl:px-24 lg:px-16 px-5   ">
        <div>
          <Image
            src={"/assets/imagery (3).jpg"}
            alt="about image"
            width={600}
            height={500}
          />
          <div className="mt-10 ">
            {/* <h3 className="text-2xl text-primary font-medium mt-2">
            TAHWILL
            </h3> */}
            <p className=" text-primary  mt-3 font-medium">
              We design personalized wellness solutions, combining science,
              data, and culture to drive lasting health and well-being for
              individuals and businesses.
            </p>
          </div>
        </div>
        <div className="md:mt-28  flex justify-center">
          <Image
            src={"/assets/icons/Tahwil 2.svg"}
            alt=""
            width={250}
            height={250}
          />
        </div>
        <div>
          <div className="mt-10 ">
            {/* <h3 className="text-2xl text-primary font-medium mt-2">
            TAHWILL
            </h3> */}
            <p className=" text-primary  mt-3 font-medium">
              At Tahwil, we provide holistic, science-backed, and culturally
              inspired wellness solutions tailored to individuals, businesses,
              and corporations. From transformative education and
              self-empowerment to strategic wellness consulting and personalized
              health programs, we create meaningful, lasting improvements in
              overall well-being. 
            </p>
          </div>
          <div className="mt-10">
<div className="mt-5"><Button className="px-10 text-primary border-primary hover:border-primary-200">     Our Service <ArrowUpRight size={20} /></Button></div>
          <Image
            src={"/assets/aboutHome.jpg"}
            alt="about image"
            width={600}
              height={500}
              className="mt-6"
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
