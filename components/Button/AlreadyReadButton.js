import styled from "styled-components";
import AlreadyReadIcon from "../Icons/AlreadyReadIcon";
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
      <AlreadyReadIcon $isActive={isAlreadyRead} />
    </StyledButton>
  );
}
const StyledButton = styled.button`
  background-color: ${({ $isAlreadyRead }) =>
    $isAlreadyRead ? "var(--color-green)" : "var(--color-light-yellow)"};
  border-radius: 4px;
  border: none;
  padding: 0.4rem;
`;
