import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "./data/DB";

// Function to get the first document in a collection
export async function getFirstDocument(docid :string) {
  // Define the collection
  const myCollection = collection(db, "Sounds", docid, "Sounds");

  // Create a query to order by a field and limit to 1
  const q = query(myCollection, limit(1));

  // Execute the query
  const querySnapshot = await getDocs(q);

  // Check if a document was found
  if (!querySnapshot.empty) {
    const firstDoc = querySnapshot.docs[0];
    console.log("First Document: ", firstDoc.data());
  } else {
    console.log("No documents found!");
  }
}


