import { Modal } from "@/app/components/Modal";

interface ModalType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Community = ({ open, setOpen }: ModalType) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Join Our Community"
      size="xl"
      setter="state"
    >
      <div className="mt-5">
        <h4 className="text-xl">Coming Soon</h4>
      </div>
    </Modal>
  );
};

export default Community;
