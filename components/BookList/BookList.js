import BookCard from "../BookCard/BookCard";
import styled from "styled-components";
import Link from "next/link";

export default function BookList({
  books,
  booksInfo,
  handleToggleAlreadyRead,
  handleToggleBookmark,
  handleToggleCurrentlyReading,
}) {
  return (
    <StyledList>
      {books?.map((book) => (
        <li key={book.id}>
          <StyledLink href={`/book-details/${book.id}`}>
            <BookCard
              title={book.title}
              author={book.author}
              genre={book.genre}
              cover={book.cover}
              booksInfo={booksInfo}
              bookId={book.id}
              handleToggleAlreadyRead={handleToggleAlreadyRead}
              handleToggleBookmark={handleToggleBookmark}
              handleToggleCurrentlyReading={handleToggleCurrentlyReading}
            />
          </StyledLink>
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
  margin-left: auto;
  margin-right: auto;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
