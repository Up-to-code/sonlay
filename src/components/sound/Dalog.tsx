import React, { useState, useRef } from 'react';
import { ref, getDownloadURL } from "firebase/storage"; // Ensure you have these imports
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

interface AppProps {
  storage: any;
  SRC: string;
}

const Alert: React.FC<AppProps> = ({ storage, SRC }) => {
  const [mp3Url, setMp3Url] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const downloadMp3 = async () => {
    if ( SRC) {
      try {
        const storageRef = ref(storage, SRC);
        const url = await getDownloadURL(storageRef);

        console.log("Firebase file URL:", url); // Log the URL to check it

        setMp3Url(url);
        setIsDialogOpen(true);
      } catch (error) {
        console.error("Error downloading file:", error); // Log any errors
      }
    }
  };


  return (
    <div className="App p-4">
      <Button
        onClick={downloadMp3}
      >
        <Download size={24} color='#FFF' />
        <span className="ml-2 hidden md:visible">Download MP3</span>
      </Button>
      
      {isDialogOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center min-w-[200px]  transition-opacity duration-300 ${isDialogOpen ? 'opacity-100' : ''}`  }>
          <div className="bg-white p-6 rounded shadow-lg relative z-20 ">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-500 size-6 hover:text-gray-800 text-lg"
             
            >
              &times;
            </button>
            <p className="text-gray-700">Downloaded MP3 file</p>

            <audio controls src={mp3Url || undefined} ref={audioRef} className=" my-8 min-w-max">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
