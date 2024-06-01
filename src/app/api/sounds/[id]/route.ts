import { db } from "@/lib/data/DB";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

type Params = {
  id: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const id = context.params.id;

  const docRef = collection(db, "Sounds", id, "Sounds");
  const docSnap = await getDocs(docRef);
  let data: { id: string; doc: DocumentData }[] = [];
  docSnap.forEach((doc) => {
    data.push({ id: doc.id, doc: doc.data() });
  });
  return NextResponse.json({ data: data });
}
