import React, { createContext, useContext, useState, useRef } from 'react';

const AudioContext = createContext();

export function useAudioPlayer() {
  return useContext(AudioContext);
}

export function AudioProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  const tracks = [
    {
      src: 'https://samplelib.com/lib/preview/mp3/sample-9s.mp3',
      title: 'Music 1',
    },
    {
      src: 'https://samplelib.com/lib/preview/mp3/sample-15s.mp3',
      title: 'Music 2',
    },
    {
      src: 'https://samplelib.com/lib/preview/mp3/sample-12s.mp3',
      title: 'Music 3',
    },
  ];

  const playTrack = () => {
    audioRef.current.play();
  };

  

  const playPreviousTrack = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
    }
  };

  const playNextTrack = () => {
    if (currentTrack < tracks.length - 1) {
      setCurrentTrack(currentTrack + 1);
    }
  };

  const currentTrackData = tracks[currentTrack];

  return (
    <AudioContext.Provider
      value={{
        currentTrackData,
        playTrack,
        playPreviousTrack,
        playNextTrack,
        audioRef,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}