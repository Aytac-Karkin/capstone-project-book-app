import React, { useState } from "react";
import styled from "styled-components";

export default function NotesInput({ commentToBeEdited }) {
  const [text, setText] = useState(commentToBeEdited || "");
  const letterCount = text.length;

  const maxLength = 250;

  function handleTextChange(event) {
    setText(event.target.value);
  }

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
  height: 80px;
  margin: 40px;
  margin-bottom: 0;
  padding: 5px;
  font-family: Arial, Helvetica, sans-serif;
  &::placeholder {
    font-family: Arial, Helvetica, sans-serif;
  }
  border-radius: 8px;
  border: 1px solid var(--color-green);
`;

const StyledCount = styled.p`
  font-size: 14px;
  margin-left: 100px;
`;
