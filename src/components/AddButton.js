export default function AddButton({ children, onShowAdd }) {
  return (
    <div className="add-skill">
      <button className="button-big" onClick={onShowAdd}>
        {children}
      </button>
    </div>
  );
}
