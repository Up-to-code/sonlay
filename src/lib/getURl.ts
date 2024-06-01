import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./data/DB";
export async function getFirebaseUrl(filePath: string): Promise<string> {
  try {
    const storageRef = ref(storage, filePath);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error: any) {
    throw new Error(`Failed to get URL for ${filePath}: ${error.message}`);
  }
}
