export default function EditButton({
  children,
  skill,
  onShowAdd,
  onArchiveSkill,
  onDeleteSkill,
}) {
  return (
    <div className="edit-skill">
      <button className="button button-big" onClick={onShowAdd}>
        {children}
      </button>

      <button
        className="button button-big button-archive danger"
        onClick={(e) => {
          e.preventDefault();
          onArchiveSkill(skill);
        }}
      >
        📥
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
