import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import styled from "styled-components";
import Navigation from "@/components/Navigation/Navigation";
import CommentModal from "@/components/CommentModal/CommentModal";
import BookDetailsCard from "@/components/BookDetailsCard/BookDetailsCard";

export default function BookDetailsPage({
  handleToggleBookmark,
  handleToggleAlreadyRead,
  handleToggleCurrentlyReading,
  books,
  booksInfo,
}) {
  const router = useRouter();
  const { id } = router.query;
  const pathName = router.pathname;
  const currentBook = books.find((book) => book.id === id);
  if (!currentBook) {
    return;
  }
  return (
    <>
      <StyledDetailedPage>
        <Header />
        <BookDetailsCard
          cover={currentBook.cover}
          title={currentBook.title}
          booksInfo={booksInfo}
          id={currentBook.id}
          author={currentBook.author}
          genre={currentBook.genre}
          publishYear={currentBook.publishYear}
          pages={currentBook.pages}
          description={currentBook.description}
          handleToggleBookmark={handleToggleBookmark}
          handleToggleCurrentlyReading={handleToggleCurrentlyReading}
          handleToggleAlreadyRead={handleToggleAlreadyRead}
          pathName={pathName}
        />

        <CommentModal id={currentBook.id} />
        <Navigation />
      </StyledDetailedPage>
    </>
  );
}

const StyledDetailedPage = styled.div`
  width: 90%;
  max-width: 600px;
  margin: auto;
  position: relative;
  padding-bottom: 50px;
`;
