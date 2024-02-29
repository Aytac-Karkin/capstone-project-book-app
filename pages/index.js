import BookList from "@/components/BookList/BookList";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import styled from "styled-components";
import FilterCategory from "@/components/FilterCategory/FilterCategory";
import { useState } from "react";
import genres from "../lib/genres.json";
import SearchBar from "@/components/Searchbar/Searchbar";

export default function HomePage({
  books,
  booksInfo,
  handleToggleBookmark,
  handleToggleAlreadyRead,
  handleToggleCurrentlyReading,
}) {
  const [filterModal, setFilterModal] = useState(false);
  const currentYear = new Date().getFullYear();

  const [filters, setFilters] = useState({});

  function handleToggleFilterModal() {
    setFilterModal(!filterModal);
  }

  function handleFilterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setFilters(data);
    setFilterModal(false);
  }

  function updateBookList() {
    const filteredByGenre = filters.genre
      ? books.filter((book) => book.genre === filters.genre)
      : books;

    const filteredByLength = filters.bookLength
      ? filteredByGenre.filter((book) => {
          if (filters.bookLength === "short") return book.pages <= 150;
          else if (filters.bookLength === "medium")
            return 150 < book.pages && book.pages <= 300;
          else if (filters.bookLength === "long") return book.pages > 300;
        })
      : filteredByGenre;

    const filteredByYear = filters.yearStart
      ? filteredByLength.filter(
          (book) =>
            filters.yearStart <= book.publishYear &&
            book.publishYear <= filters.yearEnd
        )
      : filteredByLength;
    return filteredByYear;
  }

  function handleResetFilters() {
    setFilters({});
  }

  const filteredBookList = updateBookList();

  const [searchTerm, setSearchTerm] = useState("");
  const foundBooks = filteredBookList
    .filter(({ title, genre, publishYear, author }) => {
      const titleMatch = title.toLowerCase().includes(searchTerm);
      const genreMatch = genre.toLowerCase().includes(searchTerm);
      const yearMatch = publishYear.toString().includes(searchTerm);
      const authorMatch = author.toLowerCase().includes(searchTerm);

      return titleMatch || genreMatch || yearMatch || authorMatch;
    })

    .sort((a, b) => a.title.localeCompare(b.title));

  const filterResultsCount = foundBooks
    ? foundBooks.length
    : filteredBookList.length;

  return (
    <>
      <Header />
      <StyledBody>
        <SearchBar setSearchTerm={setSearchTerm} />
        <ToggleFilterButton type="button" onClick={handleToggleFilterModal}>
          Find your next read!
        </ToggleFilterButton>
        {filterModal && (
          <Overlay>
            <StyledFilterForm onSubmit={handleFilterSubmit}>
              <ExitButton type="button" onClick={handleToggleFilterModal}>
                X
              </ExitButton>
              <FilterWrapper>
                <StyledFilterCategoryWrapper>
                  <FilterHeadline>Genre</FilterHeadline>
                  <FilterCategory filterNames={genres} category={"genre"} />
                </StyledFilterCategoryWrapper>
                <StyledRightSide>
                  <StyledFilterCategoryWrapper>
                    <FilterHeadline>Book Length</FilterHeadline>
                    <FilterCategory
                      filterNames={["short", "medium", "long"]}
                      category={"bookLength"}
                    />
                  </StyledFilterCategoryWrapper>
                  <StyledFilterCategoryWrapper>
                    <FilterHeadline>Publishing Year</FilterHeadline>
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
            </StyledFilterForm>
          </Overlay>
        )}
        <FilterTagSection>
          {filters.bookLength && (
            <FilterTag>{filters.bookLength} length</FilterTag>
          )}
          {filters.genre && <FilterTag>{filters.genre}</FilterTag>}
          {filters.yearStart && (
            <FilterTag>
              {filters.yearStart} - {filters.yearEnd}
            </FilterTag>
          )}
        </FilterTagSection>
        {filters.yearStart && (
          <StyledResults>{filterResultsCount} result(s)</StyledResults>
        )}
        {filters.yearStart && (
          <ResetButton type="button" onClick={handleResetFilters}>
            Reset
          </ResetButton>
        )}
        {filteredBookList.length > 0 ? (
          <BookList
            books={searchTerm.length === 0 ? filteredBookList : foundBooks}
            booksInfo={booksInfo}
            handleToggleBookmark={handleToggleBookmark}
            handleToggleAlreadyRead={handleToggleAlreadyRead}
            handleToggleCurrentlyReading={handleToggleCurrentlyReading}
          />
        ) : (
          <NoFilterMatchesMessage>
            Sadly, there are no books that match your filters. Try another
            combination to find your next favorite book!
          </NoFilterMatchesMessage>
        )}
      </StyledBody>
      <Navigation />
    </>
  );
}

const FilterHeadline = styled.h3`
  margin-bottom: 0;
  margin-top: 0;
`;

const StyledFilterCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FilterWrapper = styled.section`
  display: flex;
`;

const ExitButton = styled.button`
  background-color: var(--color-light-yellow);
  width: 32px;
  height: 32px;
  position: absolute;
  bottom: 0.7rem;
  right: 0.7rem;
  border-radius: 8px;
  border-style: none;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.19);
`;

const FilterButton = styled.button`
  margin-top: 1rem;
  background-color: var(--color-light-yellow);
  border-radius: 8px;
  border-style: none;
  padding: 7px 8px;
  font-size: 1rem;
  margin-left: 5px;
  position: absolute;
  bottom: 0.7rem;
  right: 3.5rem;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.19);
`;

const ResetButton = styled.button`
  background-color: var(--color-green);
  color: var(--color-light-yellow);
  border-radius: 8px;
  border-style: none;
  padding: 4px;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.15);
  margin-left: 5px;
`;
const StyledResults = styled.span`
  margin-left: 8px;
  padding: 4px;
`;

const StyledFilterForm = styled.form`
  background-color: var(--color-dark-yellow);
  border-radius: 8px;
  padding: 10px 20px;
  position: relative;
`;

const StyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledYearInput = styled.input`
  width: 6em;
  border: 1px solid black;
  border-radius: 8px;
  padding: 4px 4px 4px 8px;
  font-size: 16px;
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  inset: 0;
  position: fixed;
  background-color: rgba(49, 49, 49, 0.8);
`;

const StyledParagraph = styled.p`
  margin-bottom: 3px;
  margin-top: 0.2rem;
`;

const ToggleFilterButton = styled.button`
  margin: auto;
  margin-bottom: 10px;
  // max-width: 600px;
  display: flex;
  justify-content: center;
  background-color: var(--color-green);
  color: var(--color-light-yellow);
  border-radius: 8px;
  border-style: none;
  padding: 8px 20px;
  font-size: 1rem;
  // width: 45%;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.15);
`;

const NoFilterMatchesMessage = styled.p`
  width: 80%;
  margin: auto;
  padding-top: 20%;
  color: rgba(127, 43, 55);
`;

const FilterTagSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 0.4rem;
  gap: 5px;
`;
const FilterTag = styled.span`
  background-color: var(--color-light-yellow);
  border-radius: 8px;
  padding: 4px;
  font-size: 15px;
  margin-bottom: 20px;
  text-align: center;
`;

const StyledBody = styled.div`
  width: 95%;
  max-width: 600px;
  margin: auto;
`;
