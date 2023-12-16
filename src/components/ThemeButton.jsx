export default function ThemeButton({ isDark, setIsDark }) {
  return (
    <button
      className="button button-theme round"
      onClick={() => setIsDark((dark) => !dark)}
    >
      {isDark ? "☀️" : "🌑"}
    </button>
  );
}
