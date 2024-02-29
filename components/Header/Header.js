import styled from "styled-components";
import { useRouter } from "next/router";
import ArrowBackIcon from "../Icons/ArrowBackIcon";
export default function Header() {
  const router = useRouter();
  return (
    <>
      <StyledHeader>
        <StyledHeadline>Shelfie</StyledHeadline>
      </StyledHeader>
      {router.pathname !== "/" &&
        router.pathname !== "/spotlight" &&
        router.pathname !== "/my-library" &&
        router.pathname !== "/challenge" && (
          <StyledBackButton onClick={router.back}>
            <span
              role="image"
              aria-label="Arrow emoji indicating the return to the previous page"
            >
              <ArrowBackIcon />
            </span>
          </StyledBackButton>
        )}
    </>
  );
}
const StyledHeader = styled.header`
  display: flex;
  position: relative;
  max-width: 600px;
  margin: auto;
`;
const StyledHeadline = styled.h1`
  margin: 15px auto;
`;
const StyledBackButton = styled.button`
  background-color: var(--color-dark-yellow);
  border: none;
  font-size: 1.5rem;
  margin-top: 6px;
  &:hover {
    cursor: pointer;
  }
  position: absolute;
  top: 19px;
`;
