import Header from "@/components/Header/Header";
import BookList from "@/components/BookList/BookList";
import Navigation from "@/components/Navigation/Navigation";
import styled from "styled-components";

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
      <StyledLibraryPage>
        <Header />
        <StyledHeadline>My Library</StyledHeadline>
        {myLibraryBooks.length > 0 ? (
          <BookList books={myLibraryBooks} />
        ) : (
          <StyledParagraph>You have not added any books yet.</StyledParagraph>
        )}
        <Navigation />
      </StyledLibraryPage>
    </>
  );
}
