import BookList from "../BookList/BookList";

export default function ChallengeBookList({
  booksInfo,
  handleToggleAlreadyRead,
  readBooks,
}) {
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