import BookCard from "../BookCard/BookCard";
import styled from "styled-components";
import Link from "next/link";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  max-width: 600px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function BookList({ books, booksInfo }) {
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
            />
          </StyledLink>
        </li>
      ))}
    </StyledList>
  );
}
