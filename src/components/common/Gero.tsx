import Image from "next/image";
import { Button } from "../ui/button";

interface GeroProps {
  imageUrl: string;
  text: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const Gero: React.FC<GeroProps> = ({
  imageUrl,
  text,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="mt-5 flex items-center w-full justify-evenly px-5 h-80 bg-black rounded-md">
      <Image
        src={imageUrl}
        loading="lazy"
        alt="Gero Image"
        width={150}
        height={150}
      />

      <div className="text-end text-white ">
        <p className="text-2xl my-10 font-bold max-w-80">{text}</p>
        <Button
          style={{
            background: "#FFF",
            color: "#000",
          }}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Gero;
