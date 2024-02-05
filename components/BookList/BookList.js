import books from "../../lib/books.json";
import BookCard from "../BookCard/BookCard";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  max-width: 600px;
`;

export default function BookList() {
  return (
    <StyledList>
      {books.map((book) => (
        <li key={book.id}>
          <BookCard
            title={book.title}
            author={book.author}
            genre={book.genre}
            cover={book.cover}
          />
        </li>
      ))}
    </StyledList>
  );
}
