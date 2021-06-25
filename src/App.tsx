import React from 'react';
import { AudioPlayer } from './AudioPlayer';
import { AudioProvider } from './AudioProvider';
import { ShowTranscript, word } from './ShowTranscript';
import './styles.css';
import { transcript } from './Transcript';

export default function App() {
  const lines: word[] = JSON.parse(transcript);
  return (
    <div className="App">
      <AudioProvider>
        <AudioPlayer src="https://jfe93e.s3.amazonaws.com/1238498083/2714496762/s93290-US-774s-1620656598.mp3" />
        <ShowTranscript lines={lines} />
      </AudioProvider>
    </div>
  );
}
