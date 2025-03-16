import Image from "next/image";
import { Clock3 } from "lucide-react";

const BlogPost = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2  pt-20 px-28">
        <div className="text-primary  ">
          <h4 className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
            Physical Health
          </h4>
          <h2 className="text-2xl mt-3">
            The body’s well-being, movement,
            <br /> metabolic health, and longevity
          </h2>
          <p className="text-lg w-[70%] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper
            libero arcu at felis
          </p>
          <div className="flex justify-between mt-6 text-xs w-[70%]">
            <span>February 28th, 2025</span>
            <span className="flex gap-3 items-center">
              <Clock3 />5 min read
            </span>
          </div>
          <div className="mt-3">
            <div className="flex gap-2">
              <Image
                src={"/assets/Ellipse 7.png"}
                alt="featured image1"
                width={60}
                height={60}
              />
              <div className="flex flex-col justify-center text-xs">
                <span>Written By</span>
                <span>Shia Labeouf</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/assets/blogs.png"}
            alt="blog image1"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;