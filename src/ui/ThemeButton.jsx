import SidebarButton from "./SidebarButton";
import { PiMoon, PiSun } from "react-icons/pi";
import styles from "./Sidebar.module.css";
import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

function ThemeButton() {
  // const [isDark, setIsDark] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <SidebarButton className={styles.themeButton} onClick={toggleDarkMode}>
      {isDarkMode ? (
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
