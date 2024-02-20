import Header from "@/components/Header/Header";
import styled from "styled-components";
import Navigation from "@/components/Navigation/Navigation";
import BookDetailsCard from "@/components/BookDetailsCard/BookDetailsCard";

export default function Spotlight({ books }) {
  const currentBook = books[Math.floor(Math.random() * books.length)];
  return (
    <>
      <StyledDetailedPage>
        <Header />
        <StyledBookStar>Book ✨ Star</StyledBookStar>
        <BookDetailsCard
          cover={currentBook.cover}
          title={currentBook.title}
          id={currentBook.id}
          author={currentBook.author}
          genre={currentBook.genre}
          publishYear={currentBook.publishYear}
          pages={currentBook.pages}
          description={currentBook.description}
        />
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
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
  margin: auto;
  background-color: mintcream;
`;
