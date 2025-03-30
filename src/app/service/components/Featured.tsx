import { Button } from "@/app/components/Button"
import Image from "next/image"


const Featured = () => {
  return (
    <div className="mt-24">
      <div>
        <div className="text-center">
          <h3 className="text-center text-2xl font-semibold bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
            Our Featured Service
          </h3>
          <h3 className="text-center text-lg text-primary">
            Access expert guidance, exclusive perks, and a supportive network to<br/>
            elevate your well-being.
          </h3>
        </div>
        <div className="mt-14 px-28">
          <div className="grid grid-cols-2  gap-16 ">
            <div>
              <Image
                src={"/assets/featured.png"}
                alt="featured image1"
                width={450}
                height={500}
              />
            </div>
            <div className="text-primary   pt-20">
              <h4>Basic Tier</h4>
              <h2 className="text-xl mt-3">Lorem Ipsum Dolor</h2>
              <p className="text-lg w-[70%] mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper
                libero arcu at felis
              </p>
              <div className="mt-3">
                <Button className="text-primary border-primary px-10 hover:text-primary-200 hover:border-primary-200">
                  Book now
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="text-primary pt-20">
              <h4>Full-Scale Business Development</h4>
              <h2 className="text-xl mt-3">Lorem Ipsum Dolor</h2>
              <p className="text-lg w-[70%] mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper
                libero arcu at felis
              </p>
              <div className="mt-3">
                <Button className="text-primary border-primary px-10 hover:text-primary-200 hover:border-primary-200">
                  Book now
                </Button>
              </div>
            </div>
            <div>
              <Image
                src={"/assets/featured.png"}
                alt="featured image2"
                width={450}
                height={500}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div>
              <Image
                src={"/assets/featured.png"}
                alt="featured image3"
                width={450}
                height={500}
              />
            </div>
            <div className="text-primary pt-20">
              <h4>Long-Term Partnership</h4>
              <h2 className="text-xl mt-3">Lorem Ipsum Dolor</h2>
              <p className="text-lg w-[70%] mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper
                libero arcu at felis
              </p>
              <div className="mt-3">
                <Button className="text-primary border-primary px-10 hover:text-primary-200 hover:border-primary-200">
                  Book now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured