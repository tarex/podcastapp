import React, { useRef, useContext, useEffect } from 'react';
import { AudioContext } from './AudioProvider';

type AudioPlayerProps = {
  src: string;
};
export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { seekTime, updateTime } = useContext(AudioContext);

  useEffect(() => {
    if (audioRef.current && seekTime !== 0) {
      audioRef.current.currentTime = seekTime;
      audioRef.current.play();
    }
  }, [seekTime]);

  return (
    <audio
      controls
      onTimeUpdate={() => {
        if (audioRef.current) {
          updateTime(audioRef.current.currentTime);
        }
      }}
      ref={audioRef}
      preload="auto"
      src={src}
      style={{ width: '100%' }}
    />
  );
};
