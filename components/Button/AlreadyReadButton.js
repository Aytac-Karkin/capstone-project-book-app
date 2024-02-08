import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.$isAlreadyRead ? "darkseagreen" : "grey"};
  /* position: absolute;
  top: 8rem;
  right: 4rem; */
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
`;

export default function AlreadyReadButton({ onToggle, id, isAlreadyRead }) {
  return (
    <StyledButton
      type="button"
      onClick={() => {
        onToggle(id);
      }}
      $isAlreadyRead={isAlreadyRead}
      aria-label={
        isAlreadyRead
          ? "remove from list of books I have already read"
          : "add to list of books I have already read"
      }
    >
      ✔️
    </StyledButton>
  );
}
