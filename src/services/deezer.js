import axios from "axios";

export const Deezer = async () => {
   return await axios.get("https://deezerdevs-deezer.p.rapidapi.com/infos", {
      headers: {
         "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
         "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
      },
   });
};
