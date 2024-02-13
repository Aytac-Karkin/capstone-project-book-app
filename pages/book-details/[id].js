import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Image from "next/image";
import styled from "styled-components";
import Navigation from "@/components/Navigation/Navigation";
import MyLibraryButton from "@/components/Button/MyLibraryButton";
import AlreadyReadButton from "@/components/Button/AlreadyReadButton";
import CommentModal from "@/components/Form/Form";
import ReadMoreReadLess from "@/components/ReadMore/ReadMore";

const StyledImage = styled(Image)`
  border-radius: 8px;
  position: relative;
  top: -20px;
  box-shadow: 0 6px 20px 5px rgba(0, 0, 0, 0.19);
`;
const StyledBookDetail = styled.article`
  border: 2px solid black;
  border-radius: 8px;
  margin: 2rem auto;
  text-align: center;
`;
const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  font-style: italic;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 150px;
  right: 12%;
  gap: 1rem;
`;

const StyledDetailedPage = styled.div`
  width: 90%;
  max-width: 600px;
  margin: auto;
  position: relative;
  padding-bottom: 50px;
`;
export default function BookDetailsPage({
  handleToggleBookmark,
  handleToggleAlreadyRead,
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
      <StyledDetailedPage>
        <Header />
        <StyledBookDetail>
          <StyledImage
            src={currentBook.cover}
            height={224}
            width={150}
            alt={`Cover Image of ${currentBook.title}`}
          />
          <StyledButtonWrapper>
            <MyLibraryButton
              onToggle={handleToggleBookmark}
              id={currentBook.id}
              isBookmarked={
                booksInfo.find((bookInfo) => bookInfo.id === currentBook.id)
                  ?.isBookmarked
              }
            />
            <AlreadyReadButton
              onToggle={handleToggleAlreadyRead}
              id={currentBook.id}
              isAlreadyRead={
                booksInfo.find((bookInfo) => bookInfo.id === currentBook.id)
                  ?.isAlreadyRead
              }
            />
          </StyledButtonWrapper>
          <h2>{currentBook.title}</h2>
          <p>{currentBook.author}</p>
          <StyledSection>
            <span>{currentBook.genre}</span>
            <span>{currentBook.publishYear}</span>
            <span>{currentBook.pages} Pages</span>
          </StyledSection>
          <ReadMoreReadLess description={currentBook.description} />
        </StyledBookDetail>
        <CommentModal />
        <Navigation />
      </StyledDetailedPage>
    </>
  );
}
