import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Image from "next/image";
import styled from "styled-components";
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
  margin: 2rem auto;
  text-align: center;
`;
const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  font-style: italic;
`;

const StyledDetailedPage = styled.div`
  width: 90%;
  max-width: 600px;
  margin: auto;
  position: relative;
  padding-bottom: 50px;
`;
const StyledDescription = styled.p`
  text-align: justify;
  padding: 20px;
  line-height: 1.3;
  transition: height 1.4s;
  word-wrap: break-word;
`;

export default function Spotlight({ books }) {
  const currentBook = books[Math.floor(Math.random() * books.length)];
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
          <h2>{currentBook.title}</h2>
          <p>{currentBook.author}</p>
          <StyledSection>
            <span>{currentBook.genre}</span>
            <span>{currentBook.publishYear}</span>
            <span>{currentBook.pages} Pages</span>
          </StyledSection>
          <StyledDescription>
            <span>{currentBook.description}</span>
          </StyledDescription>
        </StyledBookDetail>
        <Navigation />
      </StyledDetailedPage>
    </>
  );
}
