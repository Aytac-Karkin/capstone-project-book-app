import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Image from "next/image";
import styled from "styled-components";
import Button from "@/components/Button/Button";
import Navigation from "@/components/Navigation/Navigation";

const StyledImage = styled(Image)`
  border-radius: 8px;
  position: relative;
  top: -20px;
  box-shadow: 0 6px 20px 5px rgba(0, 0, 0, 0.19);
`;
const StyledBookDetail = styled.article`
  border: 2px solid black;
  border-radius: 8px;
  width: 90%;
  margin: 2rem auto;
  text-align: center;
`;
const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  font-style: italic;
`;
const StyledDescription = styled.p`
  text-align: justify;
  padding: 15px;
`;
export default function BookDetailsPage({
  HandleToggleBookmark,
  books,
  booksInfo,
}) {
  const router = useRouter();
  const { id } = router.query;
  const currentBook = books.find((book) => book.id === id);
  if (!currentBook) {
    return;
  }
  return (
    <>
      <Header />
      <StyledBookDetail>
        <StyledImage
          src={currentBook.cover}
          height={224}
          width={150}
          alt={`Cover Image of ${currentBook.title}`}
        />
        <Button
          onToggle={HandleToggleBookmark}
          id={currentBook.id}
          isBookmarked={
            booksInfo.find((bookInfo) => bookInfo.id === currentBook.id)
              ?.isBookmarked
          }
        />
        <h2>{currentBook.title}</h2>
        <p>{currentBook.author}</p>
        <StyledSection>
          <span>{currentBook.genre}</span>
          <span>{currentBook.publishYear}</span>
          <span>{currentBook.pages} Pages</span>
        </StyledSection>
        <StyledDescription>{currentBook.description}</StyledDescription>
      </StyledBookDetail>
      <Navigation />
    </>
  );
}
