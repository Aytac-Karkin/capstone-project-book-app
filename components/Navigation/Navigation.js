import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Navigation({
  animationActiveBookmark,
  animationActiveAlreadyRead,
}) {
  const router = useRouter();

  return (
    <nav>
      <StyledList>
        <StyledListElement $isActive={router.pathname === "/"}>
          <NavigationLink href="/">Home</NavigationLink>
        </StyledListElement>
        <StyledSpotlightElement $isActive={router.pathname === "/spotlight"}>
          <NavigationLink href="/spotlight">🌟</NavigationLink>
        </StyledSpotlightElement>

        <ChallengeElement $isActive={router.pathname === "/challenge"}>
          <motion.div
            initial={animationActiveAlreadyRead ? { rotate: 0 } : null}
            animate={
              animationActiveAlreadyRead
                ? { rotate: [0, 10, -10, 10, -10, 0] }
                : null
            }
            transition={
              animationActiveAlreadyRead
                ? {
                    duration: 0.5,
                    ease: "easeInOut",
                    repeatType: "loop",
                    repeatDelay: 0,
                  }
                : null
            }
          >
            <NavigationLink href="/challenge">🏆</NavigationLink>
          </motion.div>
        </ChallengeElement>
        <StyledListElement $isActive={router.pathname === "/my-library"}>
          <motion.div
            initial={animationActiveBookmark ? { rotate: 0 } : null}
            animate={
              animationActiveBookmark
                ? { rotate: [0, 10, -10, 10, -10, 0] }
                : null
            }
            transition={
              animationActiveBookmark
                ? {
                    duration: 0.5,
                    ease: "easeInOut",
                    repeatType: "loop",
                    repeatDelay: 0,
                  }
                : null
            }
          >
            <NavigationLink href="/my-library">My Library</NavigationLink>{" "}
          </motion.div>
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

const StyledListElement = styled(motion.li)`
  background-color: ${({ $isActive }) =>
    $isActive ? "darkseagreen" : "seashell"};
  width: 50%;
  padding: 7px 0px;
  /* font-size: ${({ $animationActiveBookmark }) =>
    $animationActiveBookmark ? "2rem" : "1.2rem"}; */
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
