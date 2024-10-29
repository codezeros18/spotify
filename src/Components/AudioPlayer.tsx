import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import song1 from '../assets/softspot.mp3';
import song2 from '../assets/partyanthem.mp3';
import song3 from '../assets/itsnotliving.mp3';
import song4 from '../assets/nothing.mp3';
import song5 from '../assets/ilikemebetter.mp3';
import song6 from '../assets/dna.mp3';
import song7 from '../assets/daylight.mp3';
import song8 from '../assets/semenjak.mp3';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation();

  // Map of page paths to song files
  const songMap: { [key: string]: string } = {
    '/note1': song1,
    '/note2': song2,
    '/note3': song3,
    '/note4': song4,
    '/note5': song5,
    '/note6': song6,
    '/note7': song7,
    '/note8': song8,
  };

  // Get an array of paths to manage page navigation
  const pagePaths = Object.keys(songMap);
  const currentPageIndex = pagePaths.indexOf(location.pathname);
  const currentSong = songMap[location.pathname] || songMap['/note1'];

  // Define the previous and next page paths based on the current index
  const prevPage = currentPageIndex > 0 ? pagePaths[currentPageIndex - 1] : null;
  const nextPage = currentPageIndex < pagePaths.length - 1 ? pagePaths[currentPageIndex + 1] : null;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };

  return (
    <div className="absolute bottom-0 left-0 w-full p-4">
      <audio
        ref={audioRef}
        src={currentSong}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="flex items-center justify-between w-full my-4 px-4">
        <input
          type="range"
          min={0}
          max={duration}
          value={progress}
          onChange={handleSeek}
          className="w-full mx-4 h-1"
        />
      </div>
      <div className="flex items-center justify-center space-x-2">
        <button
          className={`text-white bg-transparent rounded-full p-5 text-[30px] ${!prevPage ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!prevPage}
        >
          {prevPage ? (
            <Link to={prevPage}>
              <FaBackward />
            </Link>
          ) : (
            <FaBackward />
          )}
        </button>
        <button
          onClick={togglePlayPause}
          className="text-backgrey2 bg-white rounded-full p-5"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          className={`text-white bg-transparent rounded-full p-5 text-[30px] ${!nextPage ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!nextPage}
        >
          {nextPage ? (
            <Link to={nextPage}>
              <FaForward />
            </Link>
          ) : (
            <FaForward />
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
