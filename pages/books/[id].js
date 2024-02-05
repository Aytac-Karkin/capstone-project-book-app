import { useRouter } from "next/router";
import books from "../../lib/books.json";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function BookDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const currentBook = books.find((book) => book.id === id);

  return (
    <>
      <Header />
      <article>
        <Image
          src={currentBook.cover}
          height={224}
          width={150}
          alt={`Cover Image of ${currentBook.title}`}
        />
        <h2>{currentBook.title}</h2>
        <p>{currentBook.author}</p>
        <section>
          <span>{currentBook.genre}</span>
          <span>{currentBook.publishYear}</span>
          <span>{currentBook.pages} Pages</span>
        </section>
        <p>{currentBook.description}</p>
      </article>
    </>
  );
}
