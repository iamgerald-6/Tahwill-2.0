import { Button } from "@/app/components/Button";
import Image from "next/image";
// style={{ backgroundImage: `url(/assets/bgImage.jpg)` }}
const Navbar = () => {
     const navArr = [
       { id: 1, route: "Home" },
       { id: 2, route: "About" },
       { id: 3, route: "Service" },
       { id: 4, route: "Blog" },
       { id: 5, route: "Contacts"},
     ];
  return (
    <header className="  bg-transparent relative">
      <nav className="flex items-center justify-between absolute w-[100%] xl:px-24 lg:px-16   px-7 pt-3 text-white">
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
              className="text-lg font-semibold hover:text-primary duration-300 ease-out cursor-pointer"
            >
              <a
                href={`#${navigation.route}`}
                data-scroll-to
                className="cursor-pointer"
              >
                {navigation.route}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <Button>
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
      </nav>
    </header>
  );
}

export default Navbar