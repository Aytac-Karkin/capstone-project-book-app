import styled from "styled-components";
import BookmarkIcon from "../Icons/BookMarkIcon";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function MyLibraryButton({
  onToggle,
  id,
  isBookmarked,
  setAnimationActiveBookmark,
  booksInfo,
}) {
  useEffect(() => {
    function updateAnimationBookmark(id) {
      const currentBook = booksInfo.find((book) => book.id === id);
      if (currentBook.isBookmarked) {
        setAnimationActiveBookmark(true);
        setTimeout(() => setAnimationActiveBookmark(false), "1500");
      } else {
        setAnimationActiveBookmark(false);
      }
    }
    updateAnimationBookmark(id);
  }, [isBookmarked]);

  return (
    <StyledButton
      type="button"
      onClick={() => {
        onToggle(id);
      }}
      $isBookmarked={isBookmarked}
      aria-label={isBookmarked ? "remove from my-library" : "add to my-library"}
      whileTap={{ scale: 1.3 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <BookmarkIcon $isActive={isBookmarked} />
    </StyledButton>
  );
}

const StyledButton = styled(motion.button)`
  background-color: ${({ $isBookmarked }) =>
    $isBookmarked ? "var(--color-green)" : "var(--color-light-yellow)"};
  border-radius: 4px;
  border: none;
  padding: 0.4rem;
`;
