import styled from "styled-components";
import CurrentlyReadingIcon from "../Icons/CurrentlyReadingIcon";
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
      <CurrentlyReadingIcon $isActive={isCurrentlyReading} />
    </StyledButton>
  );
}

const StyledButton = styled(motion.button)`
  background-color: ${({ $isCurrentlyReading }) =>
    $isCurrentlyReading ? "var(--color-green)" : "var(--color-light-yellow)"};
  border-radius: 4px;
  border: none;
  padding: 0.4rem;
`;
