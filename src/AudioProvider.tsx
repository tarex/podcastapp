import React, { useState } from 'react';

type AudioContextType = {
  time: number;
  seekTime: number;
  updateSeekTime: (point: number) => void;
  updateTime: (point: number) => void;
};
type AudioProviderType = {
  children?: React.ReactNode;
};

export const AudioContext = React.createContext<AudioContextType>({
  time: 0,
  seekTime: 0,
  updateSeekTime: (duration: number) => {},
  updateTime: (duration: number) => {},
});

export const AudioProvider: React.FC<AudioProviderType> = ({ children }) => {
  const [time, setTime] = useState(0);
  const [seekTime, setSeekTime] = useState(0);

  return (
    <AudioContext.Provider
      value={{
        time,
        seekTime,
        updateSeekTime: (duration: number) => {
          setSeekTime(duration);
        },
        updateTime: (duration: number) => {
          setTime(duration);
        },
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
