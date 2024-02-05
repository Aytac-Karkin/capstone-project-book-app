import styled from "styled-components";
import { useRouter } from "next/router";

const StyledHeadline = styled.h1`
  text-align: center;
  /* display: inline; */
`;

export default function Header() {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/" && (
        <button onClick={() => router.back()}>⬅️</button>
      )}
      <StyledHeadline>Shelfie</StyledHeadline>
    </>
  );
}
