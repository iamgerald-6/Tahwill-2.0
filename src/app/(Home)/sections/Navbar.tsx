"use client";
import { Button } from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";
import ToggleButton from "./ToogleButton";
import { useState } from "react";
import ResponsiveNav from "./ResponsiveNav";
import { ArrowUpRight } from "lucide-react";
import BookAppointment from "./BookAppointment";
import { useRouter } from "next/navigation";
// import ServiceTier from "./ServiceTier";
// style={{ backgroundImage: `url(/assets/bgImage.jpg)` }}
const Navbar = () => {
  const router = useRouter();
  const navArr = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "About", route: "/about" },
    { id: 3, name: "Service", route: "/service" },
    { id: 4, name: "Blog", route: "/blog" },
  ];
  const [open, setOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const openSidebar = () => {
    setOpen(true);
  };

  const closeSidebar = () => {
    setOpen(false);
  };
  // const handlOpen = () => {
  //   setOpenModal((prev) => !prev);
  // };
  const handleBrowseJobsClick = () => {
    router.push("/about");
  };
  return (
    <>
      <header className="  bg-transparent relative">
        <nav className="flex items-center bg-white/40 backdrop-blur-[3px] justify-between absolute w-[100%] xl:px-24 lg:px-16 py-3  px-7 text-white">
          <div className="">
            <Image
              width={70}
              height={30}
              src={"/assets/icons/Tahwil 2.svg"}
              alt="logo"
            />
          </div>
          <ul className="md:flex hidden gap-10">
            {navArr?.map((navigation) => (
              <li
                key={navigation.id}
                className="text-lg  hover:text-primary duration-300 ease-out cursor-pointer"
              >
                <Link
                  href={navigation.route}
                  data-scroll-to
                  className="cursor-pointer"
                >
                  {navigation.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:block hidden">
            <Button
              className="hover:text-primary"
              onClick={() => setOpenModal(true)}
            >
              Book an Appointment
            </Button>
          </div>

          <div className="md:hidden block">
            {/* <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline">&#x2630;</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
               
              </SheetHeader>
              <div className="text-3xl font-semibold grid gap-9 py-10">
                {navArr?.map((navigation) => (
                  <a
                    key={navigation.id}
                    href={`#${navigation.route}`}
                    data-scroll-to
                    className="hover:text-primary-100 duration-300 ease-out cursor-pointer"
                    onClick={(e) => handleScroll(e, navigation.route)}
                  >
                    {navigation.route}
                  </a>
                ))}
              </div>
            
            </SheetContent>
          </Sheet> */}
          </div>
          <div className="md:hidden block">
            <Button
              onClick={handleBrowseJobsClick}
              className="px-8 flex items-center gap-3 border-2 hover:border-primary hover:text-primary"
            >
              Learn More <ArrowUpRight size={20} />
            </Button>
          </div>
          <div className="md:hidden block">
            <ToggleButton
              open={open}
              setOpen={open ? closeSidebar : openSidebar}
            />
          </div>
        </nav>
      </header>
      {open && <ResponsiveNav setOpen={open ? closeSidebar : openSidebar} />}
      <BookAppointment open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default Navbar;
