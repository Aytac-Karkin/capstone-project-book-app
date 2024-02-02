export default function BookList() {
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
