import { PiPlusBold } from "react-icons/pi";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import NewItemModal from "./NewItemModal";
import style from "./NewItemButton.module.css";

function NewItemButton({ onCloseModal }) {
  return (
    <Modal>
      <Modal.Open opensWindowName="newItem">
        <Button className={style.new}>
          <PiPlusBold />
          <span>New item</span>
        </Button>
      </Modal.Open>

      <Modal.Window name="newItem">
        <NewItemModal onCloseModal={onCloseModal} />
      </Modal.Window>
    </Modal>
  );
}

export default NewItemButton;
