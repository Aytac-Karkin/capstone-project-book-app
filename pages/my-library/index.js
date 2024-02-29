import Header from "@/components/Header/Header";
import BookList from "@/components/BookList/BookList";
import Navigation from "@/components/Navigation/Navigation";
import styled from "styled-components";
import { useState } from "react";

export default function MyLibraryPage({
  books,
  booksInfo,
  handleToggleBookmark,
  handleToggleAlreadyRead,
  handleToggleCurrentlyReading,
}) {
  const [filter, setFilter] = useState("saved-books");
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
    } else if (filter === "currently-reading-books") {
      return booksInfo.find(
        (bookInfo) => bookInfo.id === book.id && bookInfo.isCurrentlyReading
      );
    }
  });

  return (
    <>
      <StyledLibraryPage>
        <Header />
        <StyledHeadline>My Library</StyledHeadline>
        <StyledButtonWrapper>
          <StyledFilterButton
            type="button"
            aria-label="shows list of saved books"
            onClick={() => {
              handleFilter("saved-books");
            }}
            $isActive={filter === "saved-books" ? true : false}
          >
            Want to read
          </StyledFilterButton>
          <StyledFilterButton
            type="button"
            aria-label="show list of books marked as currently reading"
            onClick={() => {
              handleFilter("currently-reading-books");
            }}
            $isActive={filter === "currently-reading-books" ? true : false}
          >
            Currently reading
          </StyledFilterButton>
          <StyledFilterButton
            type="button"
            aria-label="shows list of already read books"
            onClick={() => {
              handleFilter("already-read-books");
            }}
            $isActive={filter === "already-read-books" ? true : false}
          >
            Already read
          </StyledFilterButton>
        </StyledButtonWrapper>
        {filteredBooks?.length > 0 ? (
          <BookList
            books={filteredBooks}
            booksInfo={booksInfo}
            handleToggleBookmark={handleToggleBookmark}
            handleToggleAlreadyRead={handleToggleAlreadyRead}
            handleToggleCurrentlyReading={handleToggleCurrentlyReading}
          />
        ) : (
          <StyledParagraph>You have not added any books yet.</StyledParagraph>
        )}

        <Navigation />
      </StyledLibraryPage>
    </>
  );
}

const StyledHeadline = styled.h2`
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
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
  border-style: none;
  border-radius: 4px;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.19);
  font-size: 16px;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--color-green)" : "var(--color-light-yellow)"};
  color: ${({ $isActive }) =>
    $isActive ? "var(--color-light-yellow)" : "rgb(0,0,0)"};
  // font-family: var(--serif-font-bold);
  padding: 4px;
`;

const StyledButtonWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 5px;
  padding: 8px;
`;
