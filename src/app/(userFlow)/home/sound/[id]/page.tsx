/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import AudioPlayer from "@/components/sound/AudioPlayer";
/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { getDocCool } from "@/lib/fetch/getCool";

function page() {
  const [Data, setData] = useState<any>();
  if (Data == "404") return <div>404</div>;
  const params = useParams<{ id: string }>();
  useEffect(() => {
    async function getDoc() {
      const getData = await getDocCool(params.id);
      setData(getData);

      return getData;
    }
    getDoc();
  }, []);

  return (
    <div className="flex flex-col gap-5  my-20">
      {Data ? (
        Data.data.map((e: any, index: number) => {
          return (
            <AudioPlayer
              key={index}
              audioSrc={e.doc.filePath}
              title={e.doc.title}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default page;
