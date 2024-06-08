"use client";
// components/AudioPlayer.tsx

import React, { useState, useRef, ChangeEvent, useEffect } from "react";
import { Button } from "../ui/button";
import { Pause, Play } from "lucide-react";
import { getFirebaseUrl } from "@/lib/getURl";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [SRC, setSRC] = useState<string>();
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
  useEffect(() => {
    async function chaingSRC() {
      try {
        const URL = await getFirebaseUrl(src);
        setSRC(URL);
      } catch (error) {}
    }
    chaingSRC();
  }, [src]);
  return (
    <div>
      <audio ref={audioRef} src={SRC} onEnded={() => setIsPlaying(false)} />
      <Button onClick={handlePlayPause}>
        {SRC ? isPlaying ? <Pause /> : <Play /> : <p>...</p>}
      </Button>
    </div>
  );
};

export default AudioPlayer;
