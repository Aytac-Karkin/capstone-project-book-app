import React, { useState } from "react";
import styled from "styled-components";

export default function LetterCount() {
  const [text, setText] = useState("");
  const letterCount = text.length;

  const maxLength = 250;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <label htmlFor="input-notes">What were your thoughts on this Book?</label>
      <StyledInput
        onChange={handleTextChange}
        value={text}
        name="thought"
        placeholder="I really liked it!"
        maxLength={maxLength}
        id="input-notes"
        required
        onInvalid={(event) =>
          event.target.setCustomValidity("please add a thought")
        }
        onInput={(event) => event.target.setCustomValidity("")}
      />
      <StyledCount>{maxLength - letterCount} characters left</StyledCount>
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
