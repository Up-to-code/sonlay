"use client";
import Link from "next/link";
import Anime_fide from "./anim/Anime_fide";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/app/(userFlow)/home/loading";
import { getCool } from "@/lib/fetch/getCool";
import { Skeleton } from "../ui/skeleton";

export default function Gird_sound() {
  const [loading, setloading] = useState<boolean>(false);
  const [data, setdata] = useState<any>();
  useEffect(() => {
    async function Haderle_Fetch() {
      setloading(true);
      const Get_data = await getCool();

      setdata(Get_data);
      setloading(false);
    }
    Haderle_Fetch();
  }, []);

  return (
    <div className="flex flex-wrap  gap-5 max-w-5xl justify-around gap-y-10  my-10">
      <Suspense fallback={loading ? <Loading /> : null}>
        {loading ? (
          <>
            <Skeleton className="w-[200px] h-[300px] " />
            <Skeleton className="w-[200px] h-[300px] " />
            <Skeleton className="w-[200px] h-[300px] " />
            <Skeleton className="w-[200px] h-[300px] " />
            <Skeleton className="w-[200px] h-[300px] " />
            <Skeleton className="w-[200px] h-[300px] " />
            <Skeleton className="w-[200px] h-[300px] " />
            <Skeleton className="w-[200px] h-[300px] " />

          </>
        ) : (
          data?.docs?.map((e: any, index: number) => {
            return (
              <>
                <Link href={`/home/sound/${e.id}`}>
                  <Anime_fide key={index}>
                    <h1 className=" font-bold text-4xl">{e.doc.name}</h1>
                  </Anime_fide>
                </Link>
              </>
            );
          })
        )}
      </Suspense>
    </div>
  );
}
