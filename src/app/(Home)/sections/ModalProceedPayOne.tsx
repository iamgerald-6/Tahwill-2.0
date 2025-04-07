import { Modal } from "@/app/components/Modal"
import ProceedOne from "./ProceedOne";

interface ModalType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalProceedPayOne = ({open, setOpen}:ModalType) => {
  return (
    <Modal
          open={open}
          setOpen={setOpen}
        //   title="Book an appointment"
          size="xl"
          setter="state"
      >
          <ProceedOne/>
          </Modal>
  )
}

export default ModalProceedPayOne