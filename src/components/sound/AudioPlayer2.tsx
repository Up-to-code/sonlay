"use client";
// components/AudioPlayer.tsx

import React, { useState, useRef, ChangeEvent } from "react";
import { Button } from "../ui/button";
import { Pause, Play } from "lucide-react";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div >
      <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
      <Button onClick={handlePlayPause} >
        {isPlaying ? <Pause /> : <Play />}
      </Button>
    </div>
  );
};

export default AudioPlayer;
