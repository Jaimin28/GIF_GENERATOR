import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "0UTRbFtkMxAplrohufYco5IY74U8hOes";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
  const [gif, SetGif] = useState("");
  const [loading, SetLoading] = useState("false");

  async function fetchdata(tag) {
    SetLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imagesource = data.data.images.downsized_large.url;
    SetGif(imagesource);
    SetLoading(false);
  }
  useEffect(() => {
    fetchdata();
  }, []);   

  return { gif, loading, fetchdata };
}

export default useGif;
