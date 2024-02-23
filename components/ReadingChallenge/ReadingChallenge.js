import styled from "styled-components";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import ChallengeBookList from "../ChallengeBookList/ChallengeBookList";

export default function ReadingChallenge({
  books,
  booksInfo,
  handleToggleAlreadyRead,
}) {
  const [modalState, setModalState] = useState({
    isOpen: false,
    isCancelled: false,
  });

  function openModal() {
    setModalState({ isOpen: true, isSaved: false });
  }

  // function savedModal(amount, type) {
  //   setChallenge({ amount, type });
  //   setModalState({ isOpen: false, isSaved: true });
  // }

  function closeModal() {
    setModalState({ isOpen: false, isSaved: false });
  }
  const [challenge, setChallenge] = useLocalStorageState("challenge", {
    defaultValue: null,
  });

  const readBooks = books.filter((book) =>
    booksInfo.find(
      (bookInfo) => bookInfo.id === book.id && bookInfo.isAlreadyRead
    )
  );

  const [progress, setProgress] = useLocalStorageState("progress", {
    defaultValue: 0,
  });

  setProgress(readBooks.length);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    closeModal();
    setChallenge({ amount: data.amount, type: data.type });
    console.log(data);
  }

  return (
    <>
      <StyledBox>
        {challenge !== null ? (
          <Paragraph>
            You have read {progress} out of {challenge.amount} {challenge.type}
          </Paragraph>
        ) : (
          <Paragraph>You have not created a challenge yet</Paragraph>
        )}
        <StyledButton onClick={openModal}>
          {challenge !== null ? "🖊️" : "+"}
        </StyledButton>
      </StyledBox>
      <ChallengeBookList
        readBooks={readBooks}
        booksInfo={booksInfo}
        handleToggleAlreadyRead={handleToggleAlreadyRead}
      />

      {modalState.isOpen && (
        <Overlay>
          <ChallengeForm onSubmit={handleSubmit}>
            <h4>I want to read</h4>
            <div>
              <input
                name="amount"
                type="number"
                min="0"
                step="1"
                defaultValue={challenge.amount}
              />
              <select name="type" defaultValue={challenge.type}>
                <option value="books">Books</option>
                <option value="pages">Pages</option>
              </select>
            </div>
            <ButtonWrapper>
              <button type="submit"> Save Challenge</button>
              <button onClick={closeModal}>Cancel</button>
            </ButtonWrapper>
          </ChallengeForm>
        </Overlay>
      )}

      {modalState.isSaved && (
        <Overlay onClick={closeModal}>
          <Container>
            <h4>Congratulations 🎉</h4>
            <p>You succesfully created a new challenge</p>
          </Container>
        </Overlay>
      )}
    </>
  );
}

const StyledBox = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
`;
const StyledButton = styled.button`
  border: none;
  background: seashell;
  height: 55px;
  width: 55px;
  border-radius: 35px;
  border: 1px solid black;
  font-size: 40px;
  margin: 20px;
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
  background-color: rgb(255, 245, 238);
  border-radius: 8px;
  padding: 20px;
  width: 90%;
`;

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(255, 245, 238);
  border-radius: 8px;
  padding: 20px;
  width: 90%;
`;

const Paragraph = styled.p`
  font-size: 25px;
  text-align: center;
  /* border: 1px solid black;
  border-radius: 8px; */
`;

// onClick={() => savedModal(amount, type)}
