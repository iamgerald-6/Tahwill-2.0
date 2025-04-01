import { Button } from "@/app/components/Button";

const Communities = () => {
    const commArr = [
      {
        id: 1,
        title: "About the Community",
        desc: "We believe wellness is a collective journey. That’s why we’re building a robust, interconnected wellness ecosystem across Nigeria and Africa, providing the support you need to achieve sustainable, optimal health.",
      },
      {
        id: 2,
        title: "Community Initiatives (What Members Gain)",
        desc: "Access to workshops, webinars, and online courses on mental health, nutrition, and holistic wellness.",
      },
      {
        id: 3,
        title: "Networking & Collaboration",
        desc: "Building a network of like-minded businesses to foster a wellness ecosystem.",
      },
      {
        id: 4,
        title: "Expert Guidance & Support",
        desc: "Access to a network of wellness professionals (nutritionists, therapists, fitness coaches, wellness practitioners).",
      },
    ];
  return (
    <div className="bg-[url(/assets/community.jpg)] bg-cover bg-center  bg-no-repeat min-h-[120vh] ">
      <div className="bg-black/50 min-h-[120vh] backdrop-blur-[4px] w-full ]">
        <div className="pt-20">
          <h3 className="text-center text-primary-200 font-semibold text-2xl">
            Join Our Exclusive Wellness Community
          </h3>
          <h5 className="text-center text-white font-medium text-lg mt-3">
            Access expert guidance, exclusive perks, and a supportive network to
            <br />
            elevate your well-being.
          </h5>
          <div>
            <div className="grid md:grid-cols-2 md:px-28 px-8 mt-10 ">
              {" "}
              {commArr.map((community, i) => (
                <div key={community.id} className="border border-white  py-7">
                  <div className="grid gap-1 py-2 px-5">
                    <span className="text-primary-200">0{i + 1}</span>
                    <h3 className="text-white">{community.title}</h3>
                  </div>
                  <div className="text-white px-5 md:w-[75%]">
                    <p className="text-sm ">{community.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Button className="px-5 text-white border-white  hover:text-primary-200 hover:border-primary-200">
              Explore our Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communities