import Header from "@/components/Header/Header";
import BookList from "@/components/BookList/BookList";

export default function MyLibraryPage({ books, booksInfo }) {
  const myLibraryBooks = books.filter((book) =>
    booksInfo.find(
      (bookInfo) => bookInfo.id === book.id && bookInfo.isBookmarked
    )
  );

  return (
    <>
      <Header />
      <h2>My Library</h2>
      <BookList books={myLibraryBooks} />
    </>
  );
}
