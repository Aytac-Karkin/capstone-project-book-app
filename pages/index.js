import BookList from "@/components/BookList/BookList";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";

export default function HomePage({
  books,
  booksInfo,
  handleToggleBookmark,
  handleToggleAlreadyRead,
  handleToggleCurrentlyReading,
}) {
  return (
    <>
      <Header />
      <BookList
        books={books}
        booksInfo={booksInfo}
        handleToggleBookmark={handleToggleBookmark}
        handleToggleAlreadyRead={handleToggleAlreadyRead}
        handleToggleCurrentlyReading={handleToggleCurrentlyReading}
      />
      <Navigation />
    </>
  );
}
