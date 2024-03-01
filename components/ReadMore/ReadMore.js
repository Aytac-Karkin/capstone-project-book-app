import React, { useState } from "react";
import styled from "styled-components";

export default function ReadMore({ description, pathName }) {
  const [isReadMore, setIsReadMore] = useState(true);
  function toggleReadMore() {
    setIsReadMore(!isReadMore);
  }
  const readMoreLength = 350;

  return (
    <StyledParagraph>
      {isReadMore && pathName === "/book-details/[id]"
        ? description.slice(0, readMoreLength)
        : description}
      {description.length > readMoreLength &&
        pathName === "/book-details/[id]" && (
          <StyledButton onClick={toggleReadMore}>
            {isReadMore ? "...read more" : " show less"}
          </StyledButton>
        )}
    </StyledParagraph>
  );
}

const StyledParagraph = styled.p`
  text-align: justify;
  padding: 20px;
  line-height: 1.3;
  transition: 3.4s;
`;

const StyledButton = styled.button`
  color: var(--color-green);
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    color: green;
  }
  border: none;
  background-color: var(--color-light-yellow);
  font-size: 1rem;
`;
