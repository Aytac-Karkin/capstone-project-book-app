import styled from "styled-components";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import ChallengeBookList from "../ChallengeBookList/ChallengeBookList";
import EditIcon from "../Icons/EditIcon";

export default function ReadingChallenge({
  books,
  booksInfo,
  handleToggleAlreadyRead,
  handleToggleBookmark,
  handleToggleCurrentlyReading,
}) {
  const [modalState, setModalState] = useState({
    isOpen: false,
    isCancelled: false,
    isSaved: false,
  });

  function openModal() {
    setModalState({ isOpen: true, isSaved: false });
  }

  function closeModal() {
    setModalState({ isOpen: false, isSaved: false });
  }
  const [challenge, setChallenge] = useLocalStorageState("challenge", {
    defaultValue: {},
  });

  const readBooks = books.filter((book) =>
    booksInfo.find(
      (bookInfo) => bookInfo.id === book.id && bookInfo.isAlreadyRead
    )
  );

  const [progress, setProgress] = useLocalStorageState("progress", {
    defaultValue: 0,
  });

  function updateProgress() {
    if (readBooks.length > 0 && challenge.type === "books") {
      setProgress(readBooks.length);
    } else if (readBooks.length > 0 && challenge.type === "pages") {
      const pagesArray = readBooks?.map((readBook) => {
        return readBook.pages;
      });
      const pagesSum = pagesArray?.reduce((a, b) => a + b);
      setProgress(pagesSum);
    } else {
      setProgress(0);
    }
  }
  updateProgress();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setChallenge({ amount: data.amount, type: data.type });
    setModalState({ isOpen: true, isSaved: true });
  }

  return (
    <StyledBody>
      <StyledBox>
        {challenge.type ? (
          <Paragraph>
            You have read {progress} out of {challenge.amount} {challenge.type}.
          </Paragraph>
        ) : (
          <Paragraph>You have not created a challenge yet.</Paragraph>
        )}
        <StyledEditButton onClick={openModal}>
          {challenge !== null ? <EditIcon /> : "+"}
        </StyledEditButton>
      </StyledBox>
      <ChallengeBookList
        readBooks={readBooks}
        booksInfo={booksInfo}
        handleToggleAlreadyRead={handleToggleAlreadyRead}
        handleToggleBookmark={handleToggleBookmark}
        handleToggleCurrentlyReading={handleToggleCurrentlyReading}
      />

      {modalState.isOpen && (
        <Overlay>
          <ChallengeForm onSubmit={handleSubmit}>
            <StyledParagraph>I want to read:</StyledParagraph>
            <div>
              <label htmlFor="amount-input">
                <StyledInput
                  id="amount-input"
                  name="amount"
                  type="number"
                  min="0"
                  step="1"
                  defaultValue={challenge.amount}
                />
              </label>
              <label htmlFor="type-input">
                <StyledSelect
                  id="type-input"
                  name="type"
                  defaultValue={challenge.type}
                >
                  <option value="books">Books</option>
                  <option value="pages">Pages</option>
                </StyledSelect>
              </label>
            </div>
            <ButtonWrapper>
              <StyledModalButton type="submit">
                {" "}
                Save Challenge
              </StyledModalButton>
              <StyledModalButton onClick={closeModal}>Cancel</StyledModalButton>
            </ButtonWrapper>
          </ChallengeForm>
        </Overlay>
      )}

      {modalState.isSaved && (
        <Overlay onClick={closeModal}>
          <Container>
            <h4>Congratulations!</h4>
            <p>You successfully created a new challenge!</p>
          </Container>
        </Overlay>
      )}
    </StyledBody>
  );
}

const StyledModalButton = styled.button`
  background-color: rgb(255, 255, 255);
  border: 1px solid var(--color-green);
  border-radius: 8px;
  font-size: 16px;
  padding: 4px;
`;

const StyledBox = styled.div`
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  background-color: var(--color-light-yellow);
`;
const StyledEditButton = styled.button`
  border: none;
  background: var(--color-green);
  height: 35px;
  width: 35px;
  border-radius: 35px;
  font-size: 25px;
  position: absolute;
  bottom: -20px;
  right: -2px;
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

const ChallengeForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-light-yellow);
  border-radius: 8px;
  padding: 20px;
  width: 90%;
  max-width: 600px;
`;

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10%;
  gap: 5px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-light-yellow);
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  text-align: center;
  max-width: 600px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledBody = styled.div`
  width: 95%;
  max-width: 600px;
  margin: auto;
`;

const StyledInput = styled.input`
  border: 1px solid var(--color-green);
  border-radius: 8px;
  margin-right: 3px;
  padding: 4px;
  width: 70px;
  font-size: 16px;
`;

const StyledSelect = styled.select`
  border: 1px solid var(--color-green);
  border-radius: 8px;
  padding: 4px;
  background-color: rgb(255, 255, 255);
  font-size: 16px;
`;

const StyledParagraph = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;
