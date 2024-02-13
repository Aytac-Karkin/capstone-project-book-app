import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.$isCurrentlyReading ? "darkseagreen" : "seashell"};
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
`;

export default function CurrentlyReadingButton({
  onToggle,
  id,
  isCurrentlyReading,
}) {
  return (
    <StyledButton
      type="button"
      onClick={(event) => {
        onToggle(id, event);
      }}
      $isCurrentlyReading={isCurrentlyReading}
      aria-label={
        isCurrentlyReading
          ? "remove from list of books I am currently reading"
          : "add to list of books I am currently reading"
      }
    >
      📖
    </StyledButton>
  );
}
