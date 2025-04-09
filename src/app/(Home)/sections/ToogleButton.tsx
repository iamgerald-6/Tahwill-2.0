import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface ToggleButtonProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-transparent border-none mt-0.5 cursor-pointer"
    >
      <svg viewBox="0 0 23 23" width="20px" height="20px">
        <motion.path
          strokeWidth="3"
          stroke="#fff"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          animate={open ? "open" : "closed"}
        />
        <motion.path
          strokeWidth="3"
          stroke="#fff"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          animate={open ? "open" : "closed"}
        />
        <motion.path
          strokeWidth="3"
          stroke="#fff"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          animate={open ? "open" : "closed"}
        />
      </svg>
    </div>
  );
};

export default ToggleButton;
