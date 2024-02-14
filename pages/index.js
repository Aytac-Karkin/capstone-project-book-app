import BookList from "@/components/BookList/BookList";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import styled from "styled-components";
import FilterCategory from "@/components/FilterCategory/FilterCategory";
import { useState } from "react";

const StyledFilterCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FilterWrapper = styled.section`
  display: flex;
`;

const ExitButton = styled.button`
  background-color: white;
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  border-radius: 5px;
`;

const FilterButton = styled.button`
  margin-top: 1rem;
  background-color: white;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const StyledFilterForm = styled.form`
  background-color: seashell;
  border-radius: 8px;
  padding: 20px;
  position: relative;
`;

const StyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledYearInput = styled.input`
  width: 5em;
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(49, 49, 49, 0.8);
`;

const StyledParagraph = styled.p`
  margin-bottom: 0;
  margin-top: 0.2rem;
`;

const ToggleFilterButton = styled.button`
  margin: auto;
  max-width: 600px;
  display: flex;
`;

export default function HomePage({
  books,
  booksInfo,
  handleToggleBookmark,
  handleToggleAlreadyRead,
  handleToggleCurrentlyReading,
}) {
  const [filterModal, setFilterModal] = useState(false);

  function handleToggleFilterModal() {
    setFilterModal(!filterModal);
  }

  const [filters, setFilters] = useState({
    yearStart: "1021",
    yearEnd: "2024",
  });

  function handleFilterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setFilters(data);
    setFilterModal(false);
  }

  console.log("filters", filters);

  function updateBookList() {
    const filteredByGenre = filters.genre
      ? books.filter((book) => book.genre === filters.genre)
      : books;

    const filteredByLength = filters.bookLength
      ? filteredByGenre.filter((book) => {
          if (filters.bookLength === "short") return book.pages <= 150;
          else if (filters.bookLength === "medium")
            return 150 < book.pages <= 300;
          else if (filters.bookLength === "long") return book.pages < 300;
        })
      : filteredByGenre;

    const filteredByYear = filteredByLength.filter(
      (book) => filters.yearStart <= book.publishingYear <= filters.yearEnd
    );

    return filteredByYear;
  }
  const filteredBookList = updateBookList();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />
      <ToggleFilterButton
        type="button"
        onClick={() => handleToggleFilterModal()}
      >
        Find your next read!
      </ToggleFilterButton>
      {filterModal && (
        <Overlay>
          <StyledFilterForm onSubmit={handleFilterSubmit}>
            <ExitButton type="button" onClick={() => handleToggleFilterModal()}>
              ❌
            </ExitButton>
            <FilterWrapper>
              <StyledFilterCategoryWrapper>
                <h3>Genre</h3>
                <FilterCategory
                  filterNames={[
                    "Thriller",
                    "Icelandic Crime",
                    "Feminism",
                    "Young Literature",
                    "Psychology",
                    "Fantasy",
                    "Cats in Japan",
                    "Haunted Houses",
                    "American Poetry",
                    "Body Horror",
                    "Court Intrigues",
                    "Biography",
                    "AI in Fiction",
                    "Reviewed by the NYT",
                    "Old-School SciFi",
                  ]}
                  category={"genre"}
                />
              </StyledFilterCategoryWrapper>
              <StyledRightSide>
                <StyledFilterCategoryWrapper>
                  <h3>Book Length</h3>
                  <FilterCategory
                    filterNames={["short", "medium", "long"]}
                    category={"bookLength"}
                  />
                </StyledFilterCategoryWrapper>
                <StyledFilterCategoryWrapper>
                  <h3>Publishing Year</h3>
                  <label htmlFor="starting-year">
                    <StyledParagraph>From:</StyledParagraph>
                    <StyledYearInput
                      type="number"
                      id="starting-year"
                      min={1000}
                      max={2050}
                      name="yearStart"
                      defaultValue={1021}
                    ></StyledYearInput>
                  </label>
                  <label htmlFor="ending-year">
                    <StyledParagraph>To:</StyledParagraph>
                    <StyledYearInput
                      type="number"
                      id="ending-year"
                      min={1000}
                      max={2050}
                      name="yearEnd"
                      defaultValue={currentYear}
                    ></StyledYearInput>
                  </label>
                </StyledFilterCategoryWrapper>
              </StyledRightSide>
            </FilterWrapper>
            <FilterButton type="submit">Filter</FilterButton>
            <FilterButton type="button">Reset Filters</FilterButton>
          </StyledFilterForm>
        </Overlay>
      )}
      <BookList
        books={filteredBookList}
        booksInfo={booksInfo}
        handleToggleBookmark={handleToggleBookmark}
        handleToggleAlreadyRead={handleToggleAlreadyRead}
        handleToggleCurrentlyReading={handleToggleCurrentlyReading}
      />
      <Navigation />
    </>
  );
}
