import Header from "@/components/Header/Header";
import BookList from "@/components/BookList/BookList";
import Navigation from "@/components/Navigation/Navigation";
import styled from "styled-components";

const StyledHeadline = styled.h2`
  text-align: center;
`;

export default function MyLibraryPage({ books, booksInfo }) {
  const myLibraryBooks = books.filter((book) =>
    booksInfo.find(
      (bookInfo) => bookInfo.id === book.id && bookInfo.isBookmarked
    )
  );

  const alreadyReadBooks = books.filter((book) =>
    booksInfo.find(
      (bookInfo) => bookInfo.id === book.id && bookInfo.isAlreadyRead
    )
  );

  return (
    <>
      <Header />
      <StyledHeadline>My Library</StyledHeadline>
      {myLibraryBooks.length > 0 ? (
        <BookList books={myLibraryBooks} />
      ) : (
        <p>You have not added any books yet.</p>
      )}
      <Navigation />
    </>
  );
}
