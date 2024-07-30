import SidebarButton from "./SidebarButton";
import { PiMoon, PiSun } from "react-icons/pi";
import styles from "./Sidebar.module.css";
import { useState } from "react";

function ThemeButton() {
  const [isDark, setIsDark] = useState(false);

  return (
    <SidebarButton
      className={styles.themeButton}
      onClick={() => setIsDark((prev) => !prev)}
    >
      {isDark ? (
        <>
          <PiSun />
          <span>Lights on</span>
        </>
      ) : (
        <>
          <PiMoon />
          <span>Lights off</span>
        </>
      )}
    </SidebarButton>
  );
}

export default ThemeButton;
