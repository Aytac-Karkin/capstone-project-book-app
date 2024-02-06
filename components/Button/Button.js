export default function Button({ onToggle, id }) {
  return (
    <button
      onClick={() => {
        onToggle(id);
      }}
    >
      ⌂
    </button>
  );
}
