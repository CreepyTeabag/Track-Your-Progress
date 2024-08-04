import { PiTrendUp } from "react-icons/pi";
import style from "./UpdateSkillButton.module.css";
import Modal from "../../ui/Modal";
import UpdateSkillModal from "./UpdateSkillModal";

function UpdateSkillButton({ onCloseModal }) {
  return (
    <Modal>
      <Modal.Open opensWindowName="updateSkill">
        <button className={style.update}>
          <PiTrendUp />
        </button>
      </Modal.Open>

      <Modal.Window name="updateSkill">
        <UpdateSkillModal onCloseModal={onCloseModal} />
      </Modal.Window>
    </Modal>
  );
}

export default UpdateSkillButton;
