import { Button } from "@/app/components/Button";
import Image from "next/image";

const Service = () => {
  const serviceArr = [
    {
      id: 1,
      title: "Wellness Education and Empowerment",
      desc: "We provide workshops, courses, and resources on wellness, mental health, nutrition, and personal growth, including corporate training for workplace well-being.",
    },
    {
      id: 2,
      title: "Wellness Consulting",
      desc: "We provide personalized wellness consulting, corporate wellness programs, and business growth strategies, helping individuals and businesses thrive in the wellness industry.",
    },
    {
      id: 3,
      title: "Wellness Programs",
      desc: "We offer personalized wellness programs, corporate wellness initiatives, and specialized health solutions, including nutrition, fitness, mental health support, and stress management.",
    },
  ];
  return (
    <div className="mt-16 flex ">
      <div className=" pt-20 xl:px-24 lg:px-16">
        <h3 className="text-3xl font-semibold bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
          The Best of our
          <br /> Services
        </h3>
        <p className="text-primary w-[70%]">
          We provide expert wellness solutions, corporate programs, sustainable
          nutrition, and business support to promote lasting health and growth.
        </p>
        <div>
          <Button className="text-primary border-primary hover:text-primary-200 hover:border-primary-200">
            Book now
          </Button>
        </div>
      </div>
      <div className="flex">
        <div className="mr-[-100px] mt-10 z-20">
          <Image src={"/assets/services.png"} alt="" width={450} height={300} />
        </div>
        <div className="bg-gradient-to-b from-primary/20  via-primary-100/20 to-primary-200/20 rounded-xl ">
          <div className="ps-28 pe-10  py-12 flex flex-col justify-center items-center">
            {serviceArr.map((serve, i) => (
              <div
                key={serve.id}
                className="border-t border-gray-400 w-[80%]  py-5"
              >
                <div className="grid gap-1 py-3">
                  <span className="bg-gradient-to-b from-primary to-primary-100 bg-clip-text text-transparent inline-block">
                    0{i + 1}
                  </span>
                  <h3 className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
                    {serve.title}
                  </h3>
                </div>
                <div className="">
                  <p className="text-sm ">{serve.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
