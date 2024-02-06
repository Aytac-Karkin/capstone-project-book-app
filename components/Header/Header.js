import styled from "styled-components";
import { useRouter } from "next/router";

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledHeader = styled.header`
  position: relative;
`;

const StyledBackButton = styled.button`
  position: absolute;
  top: 6%;
  left: 5%;
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
        <StyledBackButton onClick={() => router.back()}>⬅️</StyledBackButton>
      )}
      <StyledHeadline>Shelfie</StyledHeadline>
    </StyledHeader>
  );
}
