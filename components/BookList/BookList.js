import books from "../../lib/books.json";
import BookCard from "../BookCard/BookCard";

export default function BookList() {
  console.log(books);
  return (
    <>
      <ul>
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
      </ul>
    </>
  );
}
