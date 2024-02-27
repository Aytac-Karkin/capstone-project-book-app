import MyLibraryButton from "@/components/Button/MyLibraryButton";
import AlreadyReadButton from "@/components/Button/AlreadyReadButton";
import ReadMore from "@/components/ReadMore/ReadMore";
import CurrentlyReadingButton from "@/components/Button/CurrentlyReadingButton";
import styled from "styled-components";
import Image from "next/image";
import ProgressBar from "../ProgressBar/ProgressBar";
import Rating from "../Rating/Rating";

export default function BookDetailsCard({
  book,
  booksInfo,
  handleToggleAlreadyRead,
  handleToggleBookmark,
  handleToggleCurrentlyReading,
  pathName,
}) {
  const { cover, title, id, author, genre, publishYear, pages, description } =
    book;
  const currentBookInfo = booksInfo?.find((bookInfo) => bookInfo.id === id);

  return (
    <StyledBookDetail>
      <StyledImage
        src={cover}
        height={224}
        width={150}
        alt={`Cover Image of ${title}`}
      />
      {pathName === "/book-details/[id]" && (
        <StyledButtonWrapper>
          <MyLibraryButton
            onToggle={handleToggleBookmark}
            id={id}
            isBookmarked={currentBookInfo?.isBookmarked}
          />
          <CurrentlyReadingButton
            onToggle={handleToggleCurrentlyReading}
            id={id}
            isCurrentlyReading={currentBookInfo?.isCurrentlyReading}
          />
          <AlreadyReadButton
            onToggle={handleToggleAlreadyRead}
            id={id}
            isAlreadyRead={currentBookInfo?.isAlreadyRead}
          />
        </StyledButtonWrapper>
      )}
      {currentBookInfo?.isCurrentlyReading && (
        <ProgressBar pages={pages} id={id}></ProgressBar>
      )}
      <h2>{title}</h2>
      <StyledAuthor>{author}</StyledAuthor>
      <StyledSection>
        <li>{genre}</li>
        <li>{publishYear}</li>
        <li>{pages} Pages</li>
      </StyledSection>
      {currentBookInfo?.isAlreadyRead && <Rating id={id} />}
      <ReadMore description={description} pathName={pathName} />
    </StyledBookDetail>
  );
}

const StyledAuthor = styled.p`
  font-size: 18px;
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
  position: relative;
  top: -20px;
  box-shadow: 0 6px 20px 5px rgba(0, 0, 0, 0.19);
`;
const StyledBookDetail = styled.article`
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  margin: 2rem auto;
  text-align: center;
  background-color: var(--color-light-yellow);
`;
const StyledSection = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 150px;
  right: 12%;
  gap: 1rem;
`;
