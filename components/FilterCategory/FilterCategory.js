import styled from "styled-components";

export default function FilterCategory({ filterNames, category }) {
  return (
    <>
      {filterNames.map((filterName) => (
        <StyledLabel key={filterName} htmlFor={filterName}>
          <input
            type="radio"
            id={filterName}
            name={category}
            value={filterName}
          />
          {filterName}
        </StyledLabel>
      ))}
    </>
  );
}

const StyledLabel = styled.label`
  padding: 2px;
`;
