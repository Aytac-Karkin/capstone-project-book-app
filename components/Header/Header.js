import styled from "styled-components";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <StyledContainer>
      <StyledHeader>
        {router.pathname !== "/" &&
          router.pathname !== "/spotlight" &&
          router.pathname !== "/my-library" &&
          router.pathname !== "/challenge" && (
            <StyledBackButton onClick={router.back}>
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
    </StyledContainer>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  max-width: 600px;
`;
const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledBackButton = styled.button`
  background-color: white;
  border: none;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin: auto;
`;
