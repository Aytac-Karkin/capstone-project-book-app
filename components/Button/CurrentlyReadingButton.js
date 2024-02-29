import styled from "styled-components";
import { motion } from "framer-motion";
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
      whileTap={{ scale: 1.3 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      📖
    </StyledButton>
  );
}

const StyledButton = styled(motion.button)`
  background-color: ${(props) =>
    props.$isCurrentlyReading ? "darkseagreen" : "seashell"};
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
`;
