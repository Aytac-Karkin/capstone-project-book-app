import BookList from "../BookList/BookList";

export default function ChallengeBookList({
  books,
  booksInfo,
  handleToggleAlreadyRead,
}) {
  const readBooks = books?.filter((book) =>
    booksInfo.some(
      (bookInfo) => bookInfo.id === book.id && bookInfo.isAlreadyRead
    )
  );
  return (
    <>
      <h3>Books you´ve already read</h3>
      {readBooks?.length > 0 ? (
        <BookList
          books={readBooks}
          booksInfo={booksInfo}
          handleToggleAlreadyRead={handleToggleAlreadyRead}
        />
      ) : (
        <p>You have not read any books yet.</p>
      )}
    </>
  );
}
