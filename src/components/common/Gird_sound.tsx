"use client";
import Link from "next/link";
import Anime_fide from "./anim/Anime_fide";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/app/(userFlow)/home/loading";
import { getCool } from "@/lib/fetch/getCool";
import { Skeleton } from "../ui/skeleton";
import AudioPlayer from "../sound/AudioPlayer2";
import { useRouter } from "next/navigation";

export default function Gird_sound() {
  const [loading, setloading] = useState<boolean>(false);
  const [data, setdata] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    async function Haderle_Fetch() {
      setloading(true);
      const Get_data = await getCool();

      setdata(Get_data);
      console.log(Get_data);
      setloading(false);
    }
    Haderle_Fetch();
  }, []);

  return (
    <div className="flex flex-wrap  gap-5 max-w-5xl justify-around gap-y-10  my-10">
      <Suspense fallback={loading ? <Loading /> : null}>
        {loading ? (
          <>
            <Skeleton className="w-[200px] h-[100px] " />
            <Skeleton className="w-[200px] h-[100px] " />
            <Skeleton className="w-[200px] h-[100px] " />
            <Skeleton className="w-[200px] h-[100px] " />
            <Skeleton className="w-[200px] h-[100px] " />
            <Skeleton className="w-[200px] h-[100px] " />
            <Skeleton className="w-[200px] h-[100px] " />
            <Skeleton className="w-[200px] h-[100px] " />
            <Skeleton className="w-[200px] h-[100px] " />
          </>
        ) : (
          data?.docs?.map((e: any, index: number) => {
            return (
              <>
                <Anime_fide key={index}>
                  <div className="flex gap-5 items-center px-2">
                    <Link href={e.id === undefined ? "/home/404" : `/home/sound/${e.id}`} >
                      <h1 className=" font-bold text-3xl py-4 px-2">
                        {e.doc.name}
                      </h1>
                    </Link>

                    <AudioPlayer src={e.doc.url || "sounds/sound.mp3"} />
                  </div>
                </Anime_fide>
              </>
            );
          })
        )}
      </Suspense>
    </div>
  );
}
