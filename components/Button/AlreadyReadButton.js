import styled from "styled-components";
import AlreadyReadIcon from "../Icons/AlreadyReadIcon";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AlreadyReadButton({
  onToggle,
  id,
  isAlreadyRead,
  booksInfo,
  setAnimationActiveAlreadyRead,
}) {
  useEffect(() => {
    function updateAnimationAlreadyRead(id) {
      const currentBook = booksInfo.find((book) => book.id === id);
      if (currentBook?.isAlreadyRead) {
        setAnimationActiveAlreadyRead(true);
        setTimeout(() => setAnimationActiveAlreadyRead(false), "1500");
      } else {
        setAnimationActiveAlreadyRead(false);
      }
    }
    updateAnimationAlreadyRead(id);
  }, [isAlreadyRead]);

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
      whileTap={{ scale: 1.3 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <AlreadyReadIcon $isActive={isAlreadyRead} />
    </StyledButton>
  );
}

const StyledButton = styled(motion.button)`
  background-color: ${({ $isAlreadyRead }) =>
    $isAlreadyRead ? "var(--color-green)" : "var(--color-light-yellow)"};
  border-radius: 4px;
  border: none;
  padding: 0.4rem;
`;
