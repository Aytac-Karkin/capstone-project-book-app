import styled from "styled-components";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function ReadingChallenge() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    isCancelled: false,
  });

  const [challenge, setChallenge] = useLocalStorageState("challenge", {
    defaultValue: null,
  });

  const [progress, setProgress] = useLocalStorageState("progress", {
    defaultValue: 0,
  });

  const [formAmount, setFormAmount] = useState("");
  const [formType, setFormType] = useState("books");

  function openModal() {
    setModalState({ isOpen: true, isSaved: false });
  }

  function savedModal(amount, type) {
    setChallenge({ amount, type });
    setModalState({ isOpen: false, isSaved: true });
  }

  function closeModal() {
    setModalState({ isOpen: false, isSaved: false });
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

      {modalState.isOpen && (
        <Overlay>
          <ChallengeForm>
            <h4>I want to read</h4>
            <div>
              <input
                type="number"
                min="0"
                step="1"
                value={formAmount}
                onChange={(event) => setFormAmount(event.target.value)}
              />
              <select
                value={formType}
                onChange={(event) => setFormType(event.target.value)}
              >
                <option value="books">Books</option>
                <option value="pages">Pages</option>
              </select>
            </div>
            <ButtonWrapper>
              <button onClick={() => savedModal(formAmount, formType)}>
                Save Challenge
              </button>
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
  width: 90%;
  height: 30%;
  position: absolute;
  margin-left: 5%;
  margin-right: 5%;
`;

const StyledButton = styled.button`
  border: none;
  background: seashell;
  height: 55px;
  width: 55px;
  border-radius: 35px;
  border: 1px solid black;
  font-size: 40px;
  margin: 145px;
  margin-left: 360px;
  display: flex;
  justify-content: center;
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
`;
