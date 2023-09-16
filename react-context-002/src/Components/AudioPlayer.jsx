import React from 'react';
import { useAudioPlayer } from './AudioContext';
import {BsPlay,BsPause} from 'react-icons/bs';
import {RxTrackPrevious, RxTrackNext} from 'react-icons/rx';

const AudioPlayer = () => {
  const {
    currentTrackData,
    playTrack,
    
    playPreviousTrack,
    playNextTrack,
    audioRef,
  } = useAudioPlayer();

  return (
    <div style={{display:"flex", justifyContent:"center", height:"100vh", alignItems:"center"}}>
        <div style={{backgroundColor:"black",color:"white", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"50vh", width:"50vw"}}>
         <h1>Audio Player</h1>
      <div>
        <h2>{currentTrackData.title}</h2>
        <audio ref={audioRef} controls>
          <source src={currentTrackData.src} type="audio/mpeg" />
         
        </audio>
      </div>
      
      <div style={{display:"flex",gap:"70px", marginTop:"25px"}}>
        <button className='btn' onClick={playPreviousTrack}><RxTrackPrevious /></button>
        <button className='btn' onClick={playTrack}><BsPlay />/<BsPause/></button>
        <button className='btn' onClick={playNextTrack}><RxTrackNext /></button>
      </div>
    </div>
    </div>
  );
};

export default AudioPlayer;