import styled from "styled-components";
import { motion } from "framer-motion";

export default function AlreadyReadButton({
  onToggle,
  id,
  isAlreadyRead,
  updateAnimationAlreadyRead,
}) {
  return (
    <StyledButton
      type="button"
      onClick={() => {
        onToggle(id);
        updateAnimationAlreadyRead(id);
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
      ✔️
    </StyledButton>
  );
}

const StyledButton = styled(motion.button)`
  background-color: ${(props) =>
    props.$isAlreadyRead ? "darkseagreen" : "seashell"};
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
`;
