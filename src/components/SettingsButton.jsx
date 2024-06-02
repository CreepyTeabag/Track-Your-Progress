import ThemeButton from "./ThemeButton";

export default function SettingsButton({ onShowSettings }) {
  return (
    <div>
      <button className="button button-theme round" onClick={onShowSettings}>
        ⚙️
      </button>
      {/* <div>🌑 📥</div> */}
    </div>
  );
}
