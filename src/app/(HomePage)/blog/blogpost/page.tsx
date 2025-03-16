import Image from 'next/image';
import React from 'react'
import { Clock3 } from "lucide-react";
import Link from 'next/link';
import SearchNav from '../components/SearchNav';
import MoreBlog from '../components/MoreBlog';

const InnerBlog = () => {
  return (
    <div>
      <div className="bg-black/60 h-[40vh] w-full">
        <div className="flex   items-center justify-center xl:px-24 lg:px-16 px-7 h-[55vh] text-white text-xl    ">
          <div className="">
            <div className="flex items-center">
              <Link href={"/"}>Home </Link>
              <span>&gt;</span>

              <p className="text-2xl underline cursor-pointer">Blog</p>
            </div>
          </div>
        </div>
      </div>
      <SearchNav />
      <div className=" flex justify-center">
        <Image
          src={"/assets/blogs.png"}
          alt="blog image1"
          width={1200}
          height={500}
        />
      </div>
      <div className="text-primary  px-28 mt-6 ">
        <h4 className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
          Physical Health
        </h4>
        <h2 className="text-3xl mt-3">
          The body’s well-being, movement, metabolic health, and longevity
        </h2>
        <div>
          <div className="flex justify-between items-center gap-2 w-[70%]">
            <div className="flex gap-3">
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
            <div className="flex flex-col text-xs">
              <span>February 28th, 2025</span>
              <span className="flex gap-3 items-center">
                <Clock3 />5 min read
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-28 mt-8 text-primary text-lg">
        <p>
          Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Suspendisse potenti. Curabitur feugiat, ullamcorper
          libero arcu at felis. Integer tincidunt, libero a tempus fermentum,
          orci ligula molestie est, nec facilisis risus libero in lacus. Donec
          interdum lorem id tortor posuere, id faucibus ipsum efficitur. Nam
          viverra, est et consectetur sagittis, purus ex volutpat justo, at
          malesuada libero augue et ligula. Cras et mauris felis. Pellentesque
          ut orci nec urna auctor suscipit. Vestibulum eu justo vel nulla
          scelerisque efficitur. Fusce luctus nisl nec metus dictum, et
          elementum mi ultrices. Praesent id lacus risus. Suspendisse ut tortor
          ac ex condimentum imperdiet. Sed vitae sem risus. Nam non magna
          turpis. Nulla a odio sit amet dolor vestibulum hendrerit ut ut nulla.
          Sed pharetra lorem at nulla elementum, id maximus turpis facilisis.
          Donec convallis felis at sem accumsan varius. Nam lobortis diam sit
          amet neque consectetur, nec congue orci accumsan. Aliquam erat
          volutpat. Integer vel ultricies leo. Sed et eros nec felis aliquet
          volutpat eget ac nisi. Suspendisse sit amet arcu nec ex tincidunt
          condimentum. Nulla facilisi. Aenean a felis justo. Mauris eget ligula
          sit amet lorem fermentum iaculis. Proin convallis tincidunt lacus in
          gravida. Vestibulum dapibus suscipit eros, eget pellentesque nisl
          venenatis eget. Vivamus ut libero eget dui condimentum pharetra nec eu
          mi. Praesent ultricies nisl nec dolor posuere, nec sollicitudin metus
          bibendum.
        </p>
      </div>
      <MoreBlog/>
    </div>
  );
};

export default InnerBlog;