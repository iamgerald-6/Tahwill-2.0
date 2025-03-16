import {   buttonVariants } from "@/app/components/Button";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";


const MoreBlog = () => {
     const blogArr = [
       {
         id: 1,
         heading: "Mental Health",
         title: "Psychological well-being, trauma healing..",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper libero arcu at felis",
         images: "/assets/blog1.png",
       },
       {
         id: 2,
         heading: "Spiritual Well-being",
         title: "Psychological well-being, trauma healing..",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper libero arcu at felis",
         images: "/assets/blog1.png",
       },
       {
         id: 3,
         heading: "Business Development",
         title: "Psychological well-being, trauma healing.. ",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper libero arcu at felis",
         images: "/assets/blog1.png",
       },
       {
         id: 4,
         heading: "Physical Health",
         title: "Psychological well-being, trauma healing.. ",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper libero arcu at felis",
         images: "/assets/blog1.png",
       },
     ];
  return (
    <div className="mt-16 pb-10">
      <div className="bg-primary-400 mx-28 py-5 px-6">
        <h3>More Blogs</h3>
      </div>
      <div className="mt-7">
        <div className="grid grid-cols-2 gap-4 px-28">
          {blogArr.map((blogs) => (
            <div key={blogs.id} className="text-primary">
              <h3 className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
                {blogs.heading}
              </h3>
              <div>
                <Image
                  src={blogs.images}
                  alt="blog image1"
                  width={300}
                  height={500}
                />
              </div>
              <h3 className=" w-[60%] text-2xl mt-3">{blogs.title}</h3>
              <p className="w-[60%] mt-3">{blogs.desc}</p>
                  <div className="mt-5 w-[30%] ">
                      {/* <Button> */}
                    
                          
                <Link
                  href={"/blog/blogpost"}
                  className={cn(
                      buttonVariants(),
                      "text-primary border-primary  hover:text-primary-200 hover:border-primary-200 w-"
                    )}
                      >
                          
                  Read more
                </Link>
                      
                    {/* </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoreBlog