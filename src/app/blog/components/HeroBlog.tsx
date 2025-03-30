import Link from "next/link";

const HeroBlog = () => {
  return (
    <div className="bg-black/60 h-[40vh] w-full">
      <div className="flex  items-center justify-center xl:px-24 lg:px-16 px-7 h-[55vh] text-white text-xl    ">
        <div className="">
          <div className="flex items-center">
            <Link href={"/"}>Home </Link>
            <span>&gt;</span>

            <p className="text-2xl underline cursor-pointer">Blog</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBlog