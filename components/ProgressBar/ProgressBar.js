import React, { useState } from "react";
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
    const thisReadingProgress = readingProgress.find((readingProgress_) => {
      return readingProgress_.bookId === id;
    });

    if (thisReadingProgress) {
      setReadingProgress(
        readingProgress.map((readingProgress_) =>
          readingProgress_ === thisReadingProgress
            ? { ...readingProgress_, progress: data.pageCount }
            : readingProgress_
        )
      );
    } else if (!thisReadingProgress) {
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

  function updateProgressPercentage() {
    if (!currentReadingProgress) {
      return;
    } else {
      return Math.round((currentReadingProgress.progress / pages) * 100);
    }
  }

  const progressPercentage = updateProgressPercentage();

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
            <h3>Reading Progress</h3>
            <label htmlFor="pageCount">
              <input
                type="number"
                id="pageCount"
                name="pageCount"
                min={0}
                max={pages}
                defaultValue={currentReadingProgress.progress}
              ></input>
            </label>
            <ButtonWrapper>
              <button type="button" onClick={cancelUpdateProgress}>
                Cancel
              </button>
              <button type="submit">Save</button>
            </ButtonWrapper>
          </ProgressModalWindow>
        </Overlay>
      )}
    </>
  );
}

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10%;
  width: 100%;
`;

const ProgressBarWrapper = styled.div`
  position: relative;
  width: 60%;
  max-width: 400px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border: 1px solid black;
  margin: 0 auto;
`;

const ProgressBarFill = styled.div`
  height: 20px;
  border-radius: 8px;
  background-color: rgb(143, 188, 143);
  width: ${(props) => props.$progresspercentage || 0}%;
`;

const ProgressBarText = styled.span`
  color: rgb(0, 0, 0);
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
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
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 20px;
  border: 3px rgb(255, 0, 0) solid;
`;
