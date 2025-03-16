import { Button } from "@/app/components/Button";

const Communities = () => {
    const commArr = [
      {
        id: 1,
        title: "Something",
        desc: "We provide personalized wellness consulting, corporate wellness programs, and business growth strategies, helping individuals and businesses thrive in the wellness industry.",
      },
      {
        id: 2,
        title: "Something",
        desc: "We provide personalized wellness consulting, corporate wellness programs, and business growth strategies, helping individuals and businesses thrive in the wellness industry.",
      },
      {
        id: 3,
        title: "Something",
        desc: "We provide personalized wellness consulting, corporate wellness programs, and business growth strategies, helping individuals and businesses thrive in the wellness industry.",
      },
      {
        id: 4,
        title: "Something",
        desc: "We provide personalized wellness consulting, corporate wellness programs, and business growth strategies, helping individuals and businesses thrive in the wellness industry.",
      },
    ];
  return (
    <div className="bg-[url(/assets/community.jpg)] bg-cover bg-center  bg-no-repeat min-h-[120vh] ">
      <div className="bg-black/22 min-h-[120vh] backdrop-blur-[4px] w-full ]">
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
            <div className="grid grid-cols-2 px-28 mt-10 ">
              {" "}
              {commArr.map((community, i) => (
                <div key={community.id} className="border border-white  py-7">
                  <div className="grid gap-1 py-2 px-5">
                    <span className="text-primary-200">0{i + 1}</span>
                    <h3 className="text-white">{community.title}</h3>
                  </div>
                  <div className="text-white px-5 w-[75%]">
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