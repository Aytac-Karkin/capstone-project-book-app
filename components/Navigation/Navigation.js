import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import ChallengeIcon from "../Icons/ChallengeIcon";
import HomeIcon from "../Icons/HomeIcon";
import SpotlightIcon from "../Icons/SpotlightIcon";
import LibraryIcon from "../Icons/LibraryIcon";

export default function Navigation() {
  const router = useRouter();
  return (
    <nav>
      <StyledList>
        <StyledListElement $isActive={router.pathname === "/"}>
          <NavigationLink href="/">
            <HomeIcon $isActive={router.pathname === "/"} />
          </NavigationLink>
        </StyledListElement>
        <StyledListElement $isActive={router.pathname === "/spotlight"}>
          <NavigationLink href="/spotlight">
            <SpotlightIcon $isActive={router.pathname === "/spotlight"} />
          </NavigationLink>
        </StyledListElement>
        <StyledListElement $isActive={router.pathname === "/challenge"}>
          <NavigationLink href="/challenge">
            <ChallengeIcon $isActive={router.pathname === "/challenge"} />
          </NavigationLink>
        </StyledListElement>
        <StyledListElement $isActive={router.pathname === "/my-library"}>
          <NavigationLink href="/my-library">
            <LibraryIcon $isActive={router.pathname === "/my-library"} />
          </NavigationLink>
        </StyledListElement>
      </StyledList>
    </nav>
  );
}

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
  border-top: 2px solid var(--color-green);
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
    $isActive ? "var(--color-green)" : "var(--color-light-yellow)"};
  width: 50%;
  padding: 7px 0px;
`;

const StyledSpotlightElement = styled.li`
  background-color: ${({ $isActive }) =>
    $isActive ? "darkseagreen" : "seashell"};
  width: 20%;
  padding: 7px 0px;
  border-right: 1px solid gainsboro;
  border-left: 1px solid gainsboro;
`;

const ChallengeElement = styled.li`
  background-color: ${({ $isActive }) =>
    $isActive ? "darkseagreen" : "seashell"};
  width: 20%;
  padding: 7px 0px;
  border-right: 1px solid gainsboro;
`;
