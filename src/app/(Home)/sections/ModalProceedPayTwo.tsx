import { Modal } from "@/app/components/Modal"

import ProceedTwo from "./ProceedTwo";

interface ModalType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalProceedPayTwo = ({open, setOpen}:ModalType) => {
  return (
    <Modal
          open={open}
          setOpen={setOpen}
        //   title="Book an appointment"
          size="xl"
          setter="state"
      >
          <ProceedTwo/>
          </Modal>
  )
}

export default ModalProceedPayTwo