import styled from "styled-components";
import { useRouter } from "next/router";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  max-width: 600px;
`;
const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledBackButton = styled.button`
  /* position: absolute; */
  /* top: 6%;
  left: 5%; */
  background-color: white;
  border: none;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export default function Header() {
  const router = useRouter();

  return (
    <StyledHeader>
      {router.pathname !== "/" && (
        <StyledBackButton onClick={() => router.back()}>
          <span
            role="image"
            aria-label="Arrow emoji indicating the return to the previous page"
          >
            ⬅️
          </span>
        </StyledBackButton>
      )}
      <StyledHeadline>Shelfie</StyledHeadline>
    </StyledHeader>
  );
}
