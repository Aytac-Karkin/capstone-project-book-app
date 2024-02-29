import BookCard from "../BookCard/BookCard";
import styled from "styled-components";

export default function BookList({
  books,
  booksInfo,
  handleToggleAlreadyRead,
  handleToggleBookmark,
  handleToggleCurrentlyReading,
  setAnimationActiveAlreadyRead,
  setAnimationActiveBookmark,
}) {
  return (
    <StyledList>
      {books?.map((book) => (
        <li key={book.id}>
          <BookCard
            book={book}
            booksInfo={booksInfo}
            handleToggleAlreadyRead={handleToggleAlreadyRead}
            handleToggleBookmark={handleToggleBookmark}
            handleToggleCurrentlyReading={handleToggleCurrentlyReading}
            setAnimationActiveAlreadyRead={setAnimationActiveAlreadyRead}
            setAnimationActiveBookmark={setAnimationActiveBookmark}
          />
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  padding: 0 5px 40px;
`;
