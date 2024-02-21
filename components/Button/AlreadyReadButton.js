import styled from "styled-components";

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

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.$isAlreadyRead ? "darkseagreen" : "seashell"};
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
`;
