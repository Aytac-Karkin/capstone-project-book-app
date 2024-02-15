import React, { useState } from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  text-align: justify;
  padding: 20px;
  line-height: 1.3;
  transition: height 1.4s;
`;

const StyledButton = styled.button`
  color: orange;
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    color: green;
  }
  border: none;
  background-color: rgb(255, 255, 255);
  font-size: 1rem;
`;

export default function ReadMoreReadLess({ description }) {
  const [isReadMore, setIsReadMore] = useState(true);
  function toggleReadMore() {
    setIsReadMore(!isReadMore);
  }
  const readMoreLength = 350;

  return (
    <StyledParagraph>
      {isReadMore ? description.slice(0, readMoreLength) : description}
      <StyledButton onClick={() => toggleReadMore()}>
        {isReadMore ? "...read more" : " show less"}
      </StyledButton>
    </StyledParagraph>
  );
}
