export default function EditButton({
  children,
  skill,
  onShowAdd,
  onDeleteSkill,
}) {
  return (
    <div className="edit-skill">
      <button className="button button-big" onClick={onShowAdd}>
        {children}
      </button>
      <button
        className="button button-big danger"
        onClick={(e) => {
          e.preventDefault();
          onDeleteSkill(skill);
        }}
      >
        Delete
      </button>
    </div>
  );
}
