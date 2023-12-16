export default function AddButton({ children, onShowAdd }) {
  return (
    <div className="add-skill">
      <button className="button button-big" onClick={onShowAdd}>
        {children}
      </button>
    </div>
  );
}
