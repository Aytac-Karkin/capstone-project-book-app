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
            //checked={selectedFilter === filterName}
          />
          {filterName}
        </StyledLabel>
      ))}
    </>
  );
}

const StyledLabel = styled.label`
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px 5px 5px 10px;
  margin: 6px 20px 0px 0px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-text);
    color: var(--color-cards);
  }
  background-color: ${(props) => (props.isSelected ? "var(--color-text)" : "")};
  color: ${(props) => (props.isSelected ? "var(--color-cards)" : "")};
  font-size: 16px;
`;

const StyledInput = styled.input`
  display: none;
`;
