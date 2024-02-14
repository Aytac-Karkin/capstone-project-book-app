import React, { useState } from "react";
import styled from "styled-components";

export default function WordLetterCounter() {
  const [text, setText] = useState("");
  const letterCount = text.length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <StyledInput
        onChange={handleTextChange}
        value={text}
        name="thought"
        placeholder="I really liked it!"
        maxLength={250}
      />
      <StyledCount>{250 - letterCount} characters left</StyledCount>
    </>
  );
}

const StyledInput = styled.textarea`
  width: 80%;
  height: 50px;
  margin: 15%;
  margin-bottom: 0;
  font-family: Arial, Helvetica, sans-serif;
  &::placeholder {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const StyledCount = styled.p`
  font-size: 14px;
  margin-left: 100px;
`;
