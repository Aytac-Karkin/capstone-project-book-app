import MyLibraryButton from "@/components/Button/MyLibraryButton";
import AlreadyReadButton from "@/components/Button/AlreadyReadButton";
import ReadMore from "@/components/ReadMore/ReadMore";
import CurrentlyReadingButton from "@/components/Button/CurrentlyReadingButton";
import styled from "styled-components";
import Image from "next/image";

export default function BookDetailsCard({
  cover,
  title,
  booksInfo,
  id,
  author,
  genre,
  publishYear,
  pages,
  description,
  handleToggleAlreadyRead,
  handleToggleBookmark,
  handleToggleCurrentlyReading,
  pathName,
}) {
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
            isBookmarked={
              booksInfo.find((bookInfo) => bookInfo.id === id)?.isBookmarked
            }
          />
          <CurrentlyReadingButton
            onToggle={handleToggleCurrentlyReading}
            id={id}
            isCurrentlyReading={
              booksInfo.find((bookInfo) => bookInfo.id === id)
                ?.isCurrentlyReading
            }
          />
          <AlreadyReadButton
            onToggle={handleToggleAlreadyRead}
            id={id}
            isAlreadyRead={
              booksInfo.find((bookInfo) => bookInfo.id === id)?.isAlreadyRead
            }
          />
        </StyledButtonWrapper>
      )}
      <h2>{title}</h2>
      <p>{author}</p>
      <StyledSection>
        <li>{genre}</li>
        <li>{publishYear}</li>
        <li>{pages} Pages</li>
      </StyledSection>
      <ReadMore description={description} />
    </StyledBookDetail>
  );
}

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
const StyledSection = styled.ul`
  display: flex;
  justify-content: space-around;
  font-style: italic;
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
