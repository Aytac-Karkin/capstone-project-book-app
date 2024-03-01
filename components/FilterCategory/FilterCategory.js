import { useState } from "react";
import styled from "styled-components";

export default function FilterCategory({ filterNames, category }) {
  const [selectedFilter, setSelectedFilter] = useState(null);

  function handleFilterChange(filterName) {
    setSelectedFilter(filterName);
  }

  return (
    <>
      {filterNames.map((filterName) => (
        <StyledLabel
          key={filterName}
          htmlFor={filterName}
          isSelected={selectedFilter === filterName}
          onClick={() => handleFilterChange(filterName)}
        >
          <StyledInput
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
  border-radius: 8px;
  padding: 4px 4px 4px 8px;
  margin: 6px 20px 0px 0px;
  background-color: var(--color-light-yellow);
  cursor: pointer;
  &:hover {
    background-color: var(--color-green);
    color: var(--color-light-yellow);
  }
  background-color: ${(props) =>
    props.isSelected ? "var(--color-green)" : ""};
  color: ${(props) => (props.isSelected ? "var(--color-light-yellow)" : "")};
  font-size: 16px;
`;

const StyledInput = styled.input`
  display: none;
`;
