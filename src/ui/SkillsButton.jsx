import { useNavigate } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import { PiSparkle } from "react-icons/pi";

function SkillsButton() {
  const navigate = useNavigate();

  return (
    <SidebarButton onClick={() => navigate("/skills")}>
      <PiSparkle />
      <span>Skills</span>
    </SidebarButton>
  );
}

export default SkillsButton;
