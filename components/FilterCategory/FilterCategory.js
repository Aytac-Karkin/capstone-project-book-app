export default function FilterCategory({ filterNames, category }) {
  return (
    <>
      {filterNames.map((filterName) => (
        <label key={filterName} htmlFor={filterName}>
          <input
            type="radio"
            id={filterName}
            name={category}
            value={filterName}
          />
          {filterName}
        </label>
      ))}
    </>
  );
}
