import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.$isBookmarked ? "darkseagreen" : "grey"};
  position: absolute;
  top: 8rem;
  right: 4rem;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
`;

export default function MyLibraryButton({ onToggle, id, isBookmarked }) {
  return (
    <StyledButton
      type="button"
      onClick={() => {
        onToggle(id);
      }}
      $isBookmarked={isBookmarked}
      aria-label={isBookmarked ? "remove from my-library" : "add to my-library"}
    >
      ⌂
    </StyledButton>
  );
}
