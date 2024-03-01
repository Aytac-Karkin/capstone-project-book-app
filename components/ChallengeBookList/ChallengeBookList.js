import BookList from "../BookList/BookList";
import styled from "styled-components";

export default function ChallengeBookList({
  booksInfo,
  handleToggleAlreadyRead,
  readBooks,
  handleToggleBookmark,
  handleToggleCurrentlyReading,
  setAnimationActiveAlreadyRead,
  setAnimationActiveBookmark,
}) {
  return (
    <>
      <StyledHeadline>
        Books you&apos;ve read for your challenge:
      </StyledHeadline>
      {readBooks?.length > 0 ? (
        <BookList
          books={readBooks}
          booksInfo={booksInfo}
          handleToggleAlreadyRead={handleToggleAlreadyRead}
          handleToggleBookmark={handleToggleBookmark}
          handleToggleCurrentlyReading={handleToggleCurrentlyReading}
          setAnimationActiveAlreadyRead={setAnimationActiveAlreadyRead}
          setAnimationActiveBookmark={setAnimationActiveBookmark}
        />
      ) : (
        <StyledParagraph>You have not read any books yet.</StyledParagraph>
      )}
    </>
  );
}

const StyledParagraph = styled.p`
  font-size: 16px;
  margin-left: 6px;
  text-align: center;
`;

const StyledHeadline = styled.h2`
  font-family: var(--sans-serif-font);
  font-size: 18px;
  text-align: center;
  margin-top: 30px;
`;
