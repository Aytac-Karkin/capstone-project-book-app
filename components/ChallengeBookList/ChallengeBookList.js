import BookList from "../BookList/BookList";

export default function ChallengeBookList({
  booksInfo,
  handleToggleAlreadyRead,
  readBooks,
  setAnimationActiveAlreadyRead,
  setAnimationActiveBookmark,
}) {
  return (
    <>
      <h3>Books you´ve already read</h3>
      {readBooks?.length > 0 ? (
        <BookList
          books={readBooks}
          booksInfo={booksInfo}
          handleToggleAlreadyRead={handleToggleAlreadyRead}
          setAnimationActiveAlreadyRead={setAnimationActiveAlreadyRead}
          setAnimationActiveBookmark={setAnimationActiveBookmark}
        />
      ) : (
        <p>You have not read any books yet.</p>
      )}
    </>
  );
}
