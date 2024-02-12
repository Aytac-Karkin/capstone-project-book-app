import Header from "@/components/Header/Header";
import BookList from "@/components/BookList/BookList";
import Navigation from "@/components/Navigation/Navigation";
import styled from "styled-components";
import { useState } from "react";

const StyledHeadline = styled.h2`
  text-align: center;
`;

const StyledLibraryPage = styled.div`
  width: 90%;
  max-width: 600px;
  margin: auto;
`;

const StyledParagraph = styled.p`
  text-align: center;
`;

const StyledFilterButton = styled.button`
  background-color: ${({ $isActive }) =>
    $isActive ? "darkseagreen" : "seashell"};
`;

export default function MyLibraryPage({ books, booksInfo }) {
  const [filter, setFilter] = useState("saved-books");
  console.log("filter:", filter);
  function handleFilter(newFilter) {
    setFilter(newFilter);
  }

  const filteredBooks = books.filter((book) => {
    if (filter === "saved-books") {
      return booksInfo.find(
        (bookInfo) => bookInfo.id === book.id && bookInfo.isBookmarked
      );
    } else if (filter === "already-read-books") {
      return booksInfo.find(
        (bookInfo) => bookInfo.id === book.id && bookInfo.isAlreadyRead
      );
    }
  });

  return (
    <>
      <StyledLibraryPage>
        <Header />
        <StyledHeadline>My Library</StyledHeadline>
        <StyledFilterButton
          type="button"
          aria-label="shows list of saved books"
          onClick={() => {
            handleFilter("saved-books");
          }}
          $isActive={filter === "saved-books" ? true : false}
        >
          ☆
        </StyledFilterButton>
        <StyledFilterButton
          type="button"
          aria-label="shows list of already read books"
          onClick={() => {
            handleFilter("already-read-books");
          }}
          $isActive={filter === "already-read-books" ? true : false}
        >
          ✔︎
        </StyledFilterButton>
        {filteredBooks?.length > 0 ? (
          <BookList books={filteredBooks} />
        ) : (
          <StyledParagraph>You have not added any books yet.</StyledParagraph>
        )}

        <Navigation />
      </StyledLibraryPage>
    </>
  );
}
