import { db } from "@/lib/data/DB";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const q = collection(db, "Sounds");
  const querySnapshot = await getDocs(q);
  let docs: any[] = [];
  querySnapshot.forEach((doc) => {
    docs.push({ id: doc.id, doc: doc.data() });
  });

  return NextResponse.json({
    name: "sonlay",
    docs: docs,
  });
}
