import { Modal } from "@/app/components/Modal"

import ProceedThree from "./ProceedThree";

interface ModalType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalPayThree = ({open, setOpen}:ModalType) => {
  return (
    <Modal
          open={open}
          setOpen={setOpen}
        //   title="Book an appointment"
          size="xl"
          setter="state"
      >
          <ProceedThree/>
          </Modal>
  )
}

export default ModalPayThree;