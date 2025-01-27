import { WordData } from "@/types/dictionary";
import axios from "axios";

const fetchWordData = async (word: string): Promise<WordData[]> => {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  try {
    const response = await axios.get<WordData[]>(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching word data:", error);
    throw new Error("Failed to fetch word data");
  }
};

export default fetchWordData;
