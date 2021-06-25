import React, { useContext } from 'react';
import { AudioContext } from './AudioProvider';

export interface word {
  startTime: number;
  endTime: number;
  word: string;
}

type ShowTranscriptType = {
  lines: word[];
};

export const ShowTranscript: React.FC<ShowTranscriptType> = ({ lines }) => {
  const { time, updateSeekTime } = useContext(AudioContext);

  const renderWords = (item: word, index: number) => {
    const isPlaying = time >= item.startTime && time <= item.endTime;

    return (
      <span
        key={index}
        className="word"
        style={
          isPlaying
            ? {
                backgroundColor: 'yellow',
                color: 'black',
              }
            : {}
        }
        onClick={() => {
          updateSeekTime(item.startTime);
        }}
      >
        {item.word}{' '}
      </span>
    );
  };
  return (
    <>
      <p className="transcript">{lines.map(renderWords)}</p>
    </>
  );
};
