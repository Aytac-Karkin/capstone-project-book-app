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
                ❌
              </ExitButton>
              <FilterWrapper>
                <StyledFilterCategoryWrapper>
                  <h3>Genre</h3>
                  <FilterCategory filterNames={genres} category={"genre"} />
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
        {filters.yearStart && <span>{filterResultsCount} result(s)</span>}
        {filters.yearStart && (
          <FilterButton type="button" onClick={handleResetFilters}>
            Reset Filters
          </FilterButton>
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

const StyledFilterCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FilterWrapper = styled.section`
  display: flex;
`;

const ExitButton = styled.button`
  background-color: rgba(255, 255, 255);
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  border-radius: 5px;
`;

const FilterButton = styled.button`
  margin-top: 1rem;
  background-color: rgba(255, 255, 255);
  border-radius: 5px;
  font-size: 0.9rem;
  margin-left: 5px;
`;

const StyledFilterForm = styled.form`
  background-color: rgba(255, 245, 238);
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
  background-color: rgba(255, 245, 238);
  border-radius: 4px;
  font-size: 1rem;
`;

const NoFilterMatchesMessage = styled.p`
  width: 80%;
  margin: auto;
  padding-top: 20%;
  color: rgba(127, 43, 55);
`;

const FilterTagSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
`;

const FilterTag = styled.span`
  background-color: rgba(239, 230, 224);
  border-radius: 4px;
  padding: 2px;
`;

const StyledBody = styled.div`
  width: 95%;
  max-width: 600px;
  margin: auto;
`;
