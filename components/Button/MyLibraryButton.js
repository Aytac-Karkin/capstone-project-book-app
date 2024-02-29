import styled from "styled-components";
import { motion } from "framer-motion";

export default function MyLibraryButton({ onToggle, id, isBookmarked }) {
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
      ☆
    </StyledButton>
  );
}

const StyledButton = styled(motion.button)`
  background-color: ${(props) =>
    props.$isBookmarked ? "darkseagreen" : "seashell"};
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
`;
