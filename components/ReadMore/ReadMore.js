import React, { useState } from "react";
import styled from "styled-components";

export default function ReadMoreReadLess({ description }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <StyledParagraph>
      {isReadMore ? description.slice(0, 350) : description}
      <StyledSpan onClick={toggleReadMore}>
        {isReadMore ? "...read more" : " show less"}
      </StyledSpan>
    </StyledParagraph>
  );
}

const StyledParagraph = styled.p`
  text-align: justify;
  padding: 20px;
  line-height: 1.3;
  transition: height 1.4s;
`;

const StyledSpan = styled.span`
  color: orange;
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    color: green;
  }
`;
