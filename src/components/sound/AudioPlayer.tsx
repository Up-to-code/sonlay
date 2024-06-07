"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Pause, Play } from "lucide-react";
import { UseAoundProvider } from "@/lib/Store/SoundlustProvider";
import { getFirebaseUrl } from "@/lib/getURl";

interface AudioPlayerProps {
  audioSrc: string; // Path to the audio file
  downloadUrl?: string; // Optional download URL (if different from audioSrc)
  title?: string;
}
const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioSrc,
  downloadUrl,
  title,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentTimeRef = useRef<HTMLSpanElement>(null);
  const durationRef = useRef<HTMLSpanElement>(null);
  const { MansgeSound, src } = UseAoundProvider();
  const [SRC, setSRC] = useState(audioSrc);
  useEffect(() => {
    async function chaingSRC() {
      try {
        const URL = await getFirebaseUrl(audioSrc);
        setSRC(URL);
        console.log(SRC);
      } catch (error) {
        console.log(error);
      }
    }
    chaingSRC();

    const audioElement = audioRef.current;
    setTimeout(() => {
      if (audioElement && durationRef.current) {
        durationRef.current.textContent = formatTime(audioElement.duration);
      }
    }, 1000);
  }, [audioRef]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const togglePlayPause = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        MansgeSound({
          src: audioElement.src,
          title: audioElement.title,
          time: audioElement.currentTime,
        });
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (src != "" && src != audioElement.src) {
        audioElement.pause();
      }
    }
  }, [src, audioRef.current]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const updateCurrentTime = () => {
        if (audioElement && currentTimeRef.current)
          currentTimeRef.current.textContent = formatTime(
            audioElement.currentTime
          );
      };
      audioElement.addEventListener("timeupdate", updateCurrentTime);
      return () =>
        audioElement.removeEventListener("timeupdate", updateCurrentTime);
    }
  }, [audioRef, formatTime]);
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl || audioSrc; // Use downloadUrl if provided, otherwise fallback to audioSrc
    downloadLink.download = `${title}.mp3`; // Set the default download filename (adjust if needed)
    downloadLink.click();
  };

  return (
    <div className=" audio-player flex flex-col items-center  px-5 rounded-lg bg-gray-100 shadow-md pb-4">
      <audio
        ref={audioRef}
        src={SRC}
        controls={false}
        onPlay={(e) => {
          setIsPlaying(true);
        }}
        onPause={() => setIsPlaying(false)}
      />
      <div className="controls flex justify-between items-center mt-4 w-full">
        <div className="flex gap-5 items-center">
          <Button
            className="play-pause-button px-2 py-4 rounded-full  text-white hover:opacity-75 focus:outline-none"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause color="#FFF" /> : <Play />}
          </Button>
          <p className=" mx-5 font-bold text-lg">{title}</p>
        </div>

        <div className="flex gap-5 items-center">
          <Button
            className="bg-transparent border border-black text-black hover:bg-black hover:text-white"
            onClick={handleDownload}
          >
            Download
          </Button>
          <span className="current-time text-sm" ref={currentTimeRef}>
            00:00
          </span>
          <span className="duration text-sm" ref={durationRef}>
            00:00
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
