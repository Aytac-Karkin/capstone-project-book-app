import styled from "styled-components";

export default function SearchBar({ setSearchTerm }) {
  return (
    <SearchInput
      onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}
      type="text"
      id="searchTerm"
      name="searchTerm"
      placeholder="🔍 search... "
      aria-label="searchbar"
    />
  );
}

const SearchInput = styled.input`
  padding: 0.3rem;
  font-size: 0.9rem;
  display: flex;
  margin: auto;
  margin-bottom: 0.5rem;
`;
