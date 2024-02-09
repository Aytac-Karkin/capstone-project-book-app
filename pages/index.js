import BookList from "@/components/BookList/BookList";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";

export default function HomePage({ books, booksInfo }) {
  return (
    <>
      <Header />
      <BookList books={books} booksInfo={booksInfo} />
      <Navigation />
    </>
  );
}
