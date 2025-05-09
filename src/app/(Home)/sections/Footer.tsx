import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const navArr = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "About", route: "/about" },
    { id: 3, name: "Service", route: "/service" },
    { id: 4, name: "Blog", route: "/blog" },
  ];
  return (
    <div>
      <div className="text-primary-400 bg-primary-300 md:px-12 px-10 sm:flex  sm:justify-between py-10 z-50">
        <div className="">
          <Image
            width={70}
            height={30}
            src={"/assets/icons/Tahwil 2.svg"}
            alt="logo"
          />
        </div>
        <div className="sm:mt-0 mt-6 sm:ps-0 ps-3">
          <ul className="grid gap-1">
            <li>+234 7038065524</li>
            <li>4a Nike Lake street</li>
            <li>maitama, Abuja.</li>
            {/* <li>estate Kado</li> */}
          </ul>
        </div>
        <div className="sm:mt-0 mt-6 sm:ps-0 ps-3">
          <ul className="grid font-semibold text-primary-400 text-sm gap-1  cursor-pointer">
            {navArr?.map((navigation) => (
              <li
                key={navigation.id}
                className="hover:underline underline-offset-2"
              >
                <Link href={navigation.route} className="cursor-pointer">
                  {navigation.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:mt-0 mt-6 sm:ps-0 ps-3">
          <p className="text-primary-400">tahwilsolutions@gmail.com</p>
          <ul className="flex gap-2">
            <Link
              href="https://www.linkedin.com/company/tahwil-solutions/"
              target="_blank"
            >
              <Image
                width={25}
                height={30}
                src={"/assets/icons/linkedin (1).svg"}
                alt="LinkedIn"
              />
            </Link>
            <Link
              href="https://x.com/tahwil_s?s=21&t=r5rVbSc45g0lc4C-E0x4KQ"
              target="_blank"
            >
              <Image
                width={25}
                height={30}
                src={"/assets/icons/twitter.svg"}
                alt="Twitter (X)"
              />
            </Link>
            <Link href="#">
              <Image
                width={25}
                height={30}
                src={"/assets/icons/facebook (3).svg"}
                alt="Facebook"
              />
            </Link>
            <Link
              href="https://www.instagram.com/tahwil_solutionss?igsh=MTZmbnU0cTJkdzkzZA=="
              target="_blank"
            >
              <Image
                width={25}
                height={30}
                src={"/assets/icons/social (1).svg"}
                alt="Instagram"
              />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
