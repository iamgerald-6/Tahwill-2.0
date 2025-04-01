import Image from "next/image";
import { cn } from "../lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

interface Props {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: React.Dispatch<React.SetStateAction<any>>;
  data: Array<dataType>;
  borderStyle?: string;
  textColor?: string;
  bgColor?: string;
  roundedLeft?: boolean;
  roundedRight?: boolean;
  spaceBetweenTabs?: boolean;
  images?: Array<string>;
}

type dataType = {
  label: string;
  value: string;
};

const Tabs = ({
  value,
  setValue,
  data: tabData,
  borderStyle = "border",
  textColor = "text-primary-500",
  bgColor = "bg-green-50",
  roundedLeft = true,
  roundedRight = true,
  spaceBetweenTabs = false,
  images = [],
}: Props) => {
  return (
    <>
      <div className="md:flex hidden  ">
        {tabData.map((tab, idx) => (
          <span
            key={idx}
            onClick={() => setValue(tab?.value)}
            className={cn(
              tab?.value === value
                ? ` ${borderStyle} border-primary-300 ${textColor} ${bgColor} font-semibold`
                : `${borderStyle} border-gray-200`,
              " w-full text-center py-1 cursor-pointer  ",
              idx === 0 && roundedLeft && "rounded-l-md",
              tabData?.length - 1 === idx && roundedRight && "rounded-r-md",
              spaceBetweenTabs && idx > 0 && "ml-3"
            )}
          >
            {images[idx] && (
              <div className="flex justify-center">
                <Image
                  src={images[idx]}
                  alt={tab.label}
                  className="w-10 h-10  object-contain" // Add fixed dimensions and object-contain for consistent size and alignment
                />
              </div>
            )}
            {/* Render image if available */}
            <span className="text-sm whitespace-nowrap px-5">{tab?.label}</span>
          </span>
        ))}
      </div>

      <div className="md:hidden">
        <Select onValueChange={setValue}>
          <SelectTrigger className="w-full font-semibold">
            <SelectValue placeholder={tabData[0]?.label} />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {tabData?.map((tab) => (
              <SelectItem key={tab?.value} value={tab?.value}>
                {tab?.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Tabs;
