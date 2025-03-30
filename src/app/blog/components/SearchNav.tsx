import { Input } from "@/app/components/Input";
import { Search } from "lucide-react";
const SearchNav = () => {
    const blogNav = [
      { id: 1, name: "Physical Health ", route: "#" },
      { id: 2, name: "Mental Health ", route: "#" },
      { id: 3, name: "Spiritual Well-being ", route: "#" },
      { id: 4, name: "Wellness", route: "#" },
    ];
  return (
    <div>
          <nav className="flex justify-between bg-primary-500/10 px-16 py-3">
              <div className="flex gap-10 items-center">
                  
        {blogNav.map((blogging) => (
            <div key={blogging.id}>
            <ul className="">
              <li className="hover:text-primary cursor-pointer font-medium">{blogging.name}</li>
            </ul>
          </div>
        ))}
        </div>
        <div className="">
          <div className="flex justify-between items-center border  px-6">
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
  );
}

export default SearchNav