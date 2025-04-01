"use client";
import * as React from "react";
import { Modal } from "../components/Modal";
import Tabs from "../components/Tabs";
import TierOne from "./TierOne";
import TierTwo from "./TierTwo";
import TierThree from "./TierThree";

interface ModalType {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const BookAppointment = ({open, setOpen}:ModalType) => {
  type TabValue =
  | "One"
  | "Two"
  | "Three"
  

// Component mapping
const pages: { [key in TabValue]: React.ComponentType } = {
  One: TierOne,
  Two: TierTwo,
  Three: TierThree,
 
};

const [tab, setTab] = React.useState<TabValue>("One");
const Component = pages[tab];

  const tabData = [
    { label: "Tier One", value: "One" },
    { label: "Tier Two", value: "Two" },
    { label: "Tier Three", value: "Three" },
   
  ];

    return (
      <Modal
        open={open}
        setOpen={setOpen}
        title="Book an appointment"
       size="xl"
        setter="state"
      >
        <div className="overflow-y-auto w-full h-50vh">
          <Tabs data={tabData} value={tab} setValue={setTab} />
        </div>
        <div className="pb-10">
          <Component />
        </div>
      </Modal>
    );
}

  

export default BookAppointment;





  


    
      
    
