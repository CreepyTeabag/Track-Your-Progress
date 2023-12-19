export default function CloseButton({ onClose }) {
  return (
    <span className="button button-close" onClick={onClose}>
      ×
    </span>
  );
}
