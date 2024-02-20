import styled from "styled-components";

export default function CurrentlyReadingButton({
  onToggle,
  id,
  isCurrentlyReading,
}) {
  return (
    <StyledButton
      type="button"
      onClick={() => {
        onToggle(id);
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

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.$isCurrentlyReading ? "darkseagreen" : "seashell"};
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
`;
