import { useState } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

export default function ProgressBar({ pages, id }) {
  const [progressModal, setProgressModal] = useState(false);
  const [readingProgress, setReadingProgress] = useLocalStorageState(
    "readingProgress",
    { defaultValue: [{ progress: 0 }] }
  );

  function handleToggleProgressModal() {
    setProgressModal(!progressModal);
  }

  function handleSubmitProgress(event, id) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (currentReadingProgress) {
      setReadingProgress(
        readingProgress.map((readingProgress_) =>
          readingProgress_ === currentReadingProgress
            ? { ...readingProgress_, progress: data.pageCount }
            : readingProgress_
        )
      );
    } else {
      setReadingProgress([
        ...readingProgress,
        { bookId: id, progress: data.pageCount },
      ]);
    }

    setProgressModal(false);
  }

  function cancelUpdateProgress() {
    setProgressModal(false);
  }

  const currentReadingProgress = readingProgress?.find((readingProgress_) => {
    return readingProgress_.bookId === id;
  });

  const progressPercentage = currentReadingProgress
    ? Math.round((currentReadingProgress.progress / pages) * 100)
    : 0;

  return (
    <>
      <ProgressBarWrapper onClick={handleToggleProgressModal}>
        <ProgressBarFill $progresspercentage={progressPercentage}>
          {currentReadingProgress ? (
            <ProgressBarText>
              Page {currentReadingProgress.progress}/{pages} -{" "}
              {progressPercentage}%
            </ProgressBarText>
          ) : (
            <ProgressBarText>Page 0/{pages} - 0%</ProgressBarText>
          )}
        </ProgressBarFill>
      </ProgressBarWrapper>
      {progressModal && (
        <Overlay>
          <ProgressModalWindow
            onSubmit={(event) => handleSubmitProgress(event, id)}
          >
            <label htmlFor="pageCount">
              <StyledOnPage>I am on page:</StyledOnPage>
              <StyledInput
                type="number"
                id="pageCount"
                name="pageCount"
                min={0}
                max={pages}
                defaultValue={currentReadingProgress?.progress}
              ></StyledInput>
            </label>
            <ButtonWrapper>
              <StyledButton type="submit">Save</StyledButton>
              <StyledButton type="button" onClick={cancelUpdateProgress}>
                Cancel
              </StyledButton>
            </ButtonWrapper>
          </ProgressModalWindow>
        </Overlay>
      )}
    </>
  );
}

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10%;
  width: 120px;
`;

const StyledButton = styled.button`
  margin: 3px;
  background-color: white;
  border-radius: 8px;
  padding: 4px;
  border: 1px solid var(--color-green);
  font-size: 16px;
`;

const ProgressBarWrapper = styled.div`
  position: relative;
  width: 60%;
  max-width: 400px;
  border-radius: 10px;
  margin: 0 auto;
`;

const ProgressBarFill = styled.div`
  height: 20px;
  border-radius: 8px;
  background-color: var(--color-green);
  width: ${(props) => props.$progresspercentage || 0}%;
`;

const ProgressBarText = styled.span`
  color: var(--color-light-yellow);
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.15);
  background-color: rgb(0, 132, 114, 0.6);
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

const ProgressModalWindow = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  height: 40%;
  background-color: var(--color-light-yellow);
  border-radius: 8px;
  padding: 20px;
`;

const StyledOnPage = styled.p`
  margin-bottom: 10px;
  margin-top: 5px;
  font-size: 18px;
`;

const StyledInput = styled.input`
  border: 1px solid var(--color-green);
  border-radius: 8px;
  padding: 4px;
  width: 60px;
  text-align: center;
  font-size: 16px;
`;
