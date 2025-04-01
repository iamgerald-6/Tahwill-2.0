"use client";
import { Input } from "@/app/components/Input";
import ToogleButtonBlog from "@/app/sections/ToogleButtonBlog";
import { Search } from "lucide-react";
import { useState } from "react";
const SearchNav = () => {
  const blogNav = [
    { id: 1, name: "Physical Health ", route: "#" },
    { id: 2, name: "Mental Health ", route: "#" },
    { id: 3, name: "Spiritual Well-being ", route: "#" },
    { id: 4, name: "Wellness", route: "#" },
  ];
  const [open, setOpen] = useState(false);
  const openSidebar = () => {
    setOpen(true);
  };

  const closeSidebar = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <nav className="flex justify-between bg-primary-500/10 md:px-16 px-5 py-3">
          <div className="flex gap-10 items-center ">
            <div className="md:hidden block">
              <ToogleButtonBlog
                open={open}
                setOpen={open ? closeSidebar : openSidebar}
              />
            </div>

            {blogNav.map((blogging) => (
              <div key={blogging.id}>
                <ul className="md:block hidden">
                  <li className="hover:text-primary cursor-pointer font-medium">
                    {blogging.name}
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="">
            <div className="flex justify-between items-center border px-6">
              <Input
                type="search"
                placeholder="Search"
                className=" md:w-74  border-none outline-none focus:outline-none "
              />
              <Search className="" />
            </div>
          </div>
        </nav>
      </div>
      {open && (
        <div className="bg-white shadow-sm px-6 flex flex-col py-3 gap-3">
          {blogNav.map((blogging) => (
            <div key={blogging.id}>
              <ul className="">
                <li className="hover:text-primary cursor-pointer font-medium">
                  {blogging.name}
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchNav;
