import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.$isBookmarked ? "hotpink" : "grey")};
`;

export default function Button({ onToggle, id, isBookmarked }) {
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
