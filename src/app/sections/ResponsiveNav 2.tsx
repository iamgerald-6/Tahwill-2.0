
"use client"
import Link from 'next/link';
import React, { useState, type Dispatch, type SetStateAction } from 'react'
import { Button } from '../components/Button';
import BookAppointment from './BookAppointment';
interface responsiveType {
  
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const ResponsiveNav = ({ setOpen }: responsiveType) => {
    const [openModal, setOpenModal] = useState(false);
    const navArr = [
      { id: 1, name: "Home", route: "/" },
      { id: 2, name: "About", route: "/about" },
      { id: 3, name: "Service", route: "/service" },
      { id: 4, name: "Blog", route: "/blog" },
    ];
     const handleClick = () => {
       setOpen((prev) => !prev);
     };
  return (
    <div className="relative">
      <div className="absolute top-[78px] w-full bg-white pt-6  pb-7 px-8">
        <ul className="flex flex-col gap-7 text-primary  ">
          {navArr?.map((navigation) => (
            <li
              key={navigation.id}
              className="text-lg  hover:text-primary duration-300 ease-out cursor-pointer"
            >
              <Link
                onClick={handleClick}
                href={navigation.route}
                data-scroll-to
                className="cursor-pointer"
              >
                {navigation.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full mt-6">
          <Button
            onClick={() => setOpenModal(true)}
            className="border-primary text-primary "
          >
            Book an Appointment
          </Button>
        </div>
      </div>
      <BookAppointment open={openModal} setOpen={setOpenModal} />
    </div>
  );
}

export default ResponsiveNav