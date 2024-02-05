import { useRouter } from "next/router";
import books from "../../lib/books.json";
import Header from "@/components/Header/Header";
import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  border-radius: 8px;
  position: relative;
  top: -20px;
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
export default function BookDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const currentBook = books.find((book) => book.id === id);

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
        <h2>{currentBook.title}</h2>
        <p>{currentBook.author}</p>
        <StyledSection>
          <span>{currentBook.genre}</span>
          <span>{currentBook.publishYear}</span>
          <span>{currentBook.pages} Pages</span>
        </StyledSection>
        <StyledDescription>{currentBook.description}</StyledDescription>
      </StyledBookDetail>
    </>
  );
}
