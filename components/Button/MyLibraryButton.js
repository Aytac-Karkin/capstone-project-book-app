import styled from "styled-components";
import BookmarkIcon from "../Icons/BookMarkIcon";
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
      <BookmarkIcon $isActive={isBookmarked} />
    </StyledButton>
  );
}
const StyledButton = styled.button`
  background-color: ${({ $isBookmarked }) =>
    $isBookmarked ? "var(--color-green)" : "var(--color-light-yellow)"};
  border-radius: 4px;
  border: none;
  width: 32px;
  height: 32px;
`;
