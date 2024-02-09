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

export default function MyLibraryPage({ books, booksInfo }) {
  const [filter, setFilter] = useState("saved-books");
  console.log("filter:", filter);
  function handleFilter(newFilter) {
    setFilter(newFilter);
  }
  console.log("booksinfo:", booksInfo);

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

  console.log("filteredBooks:", filteredBooks);

  return (
    <>
      <StyledLibraryPage>
        <Header />
        <StyledHeadline>My Library</StyledHeadline>
        <button
          type="button"
          aria-label="shows list of saved books"
          onClick={() => {
            handleFilter("saved-books");
          }}
        >
          ☆
        </button>
        <button
          type="button"
          aria-label="shows list of already read books"
          onClick={() => {
            handleFilter("already-read-books");
          }}
        >
          ✔︎
        </button>
        <BookList books={filteredBooks} />
        <Navigation />
      </StyledLibraryPage>
    </>
  );
}

// {myLibraryBooks?.length > 0 ? (
//   <BookList books={myLibraryBooks} />
// ) : (
//   <StyledParagraph>You have not added any books yet.</StyledParagraph>
// )}
