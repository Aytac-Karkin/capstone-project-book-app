import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const NavigationLink = styled(Link)`
  text-decoration: none;
  display: block;
  text-align: center;
  color: black;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;

  padding-left: 0;
  border-top: 2px solid black;
  margin-top: 20px;
  font-size: 1.2rem;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 600px;
`;

const StyledListElement = styled.li`
  background-color: ${({ $isActive }) =>
    $isActive ? "darkseagreen" : "seashell"};
  width: 50%;
  padding: 7px 0px;
`;

export default function Navigation() {
  const router = useRouter();
  return (
    <nav>
      <StyledList>
        <StyledListElement $isActive={router.pathname === "/"}>
          <NavigationLink href="/">Home</NavigationLink>
        </StyledListElement>
        <StyledListElement $isActive={router.pathname === "/spotlight"}>
          <NavigationLink href="/spotlight">SP</NavigationLink>
        </StyledListElement>
        <StyledListElement $isActive={router.pathname === "/my-library"}>
          <NavigationLink href="/my-library">My Library</NavigationLink>
        </StyledListElement>
      </StyledList>
    </nav>
  );
}
