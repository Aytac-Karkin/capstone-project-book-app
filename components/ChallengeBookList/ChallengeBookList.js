import BookList from "../BookList/BookList";
import styled from "styled-components";

export default function ChallengeBookList({
  booksInfo,
  handleToggleAlreadyRead,
  readBooks,
  handleToggleBookmark,
  handleToggleCurrentlyReading,
}) {
  return (
    <>
      <StyledParagraph>Books you&apos;ve already read:</StyledParagraph>
      {readBooks?.length > 0 ? (
        <BookList
          books={readBooks}
          booksInfo={booksInfo}
          handleToggleAlreadyRead={handleToggleAlreadyRead}
          handleToggleBookmark={handleToggleBookmark}
          handleToggleCurrentlyReading={handleToggleCurrentlyReading}
        />
      ) : (
        <StyledParagraph>You have not read any books yet.</StyledParagraph>
      )}
    </>
  );
}

const StyledParagraph = styled.p`
  font-size: 18px;
  margin-left: 6px;
`;
