import Header from "@/components/Header/Header";
import styled from "styled-components";
import Navigation from "@/components/Navigation/Navigation";
import BookDetailsCard from "@/components/BookDetailsCard/BookDetailsCard";
import SpotlightIcon from "@/components/Icons/SpotlightIcon";

export default function Spotlight({ books }) {
  const currentBook = books[Math.floor(Math.random() * books.length)];
  return (
    <>
      <StyledDetailedPage>
        <Header />
        <StyledBookStar>
          Book <SpotlightIcon /> Star
        </StyledBookStar>
        <BookDetailsCard book={currentBook} />
        <Navigation />
      </StyledDetailedPage>
    </>
  );
}

const StyledDetailedPage = styled.div`
  width: 90%;
  max-width: 600px;
  margin: auto;
  position: relative;
  padding-bottom: 50px;
`;

const StyledBookStar = styled.h2`
  text-align: center;
  border-radius: 5px;
  width: 200px;
  margin: auto;
  background-color: var(--color-cards);
`;
