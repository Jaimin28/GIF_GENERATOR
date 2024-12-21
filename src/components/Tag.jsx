import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = "0UTRbFtkMxAplrohufYco5IY74U8hOes";

function Tag() {
  const [tag, SetTag] = useState("");
  const { gif, loading, fetchdata } = useGif(tag);

  return (
    <div className="bg-zinc-500 w-1/2  items-center flex flex-col gap-10 mt-5 p-5 rounded-xl border border-black ">
      <h1 className="font-bold text-xl underline mt-[15px] text-white">
        RANDOM {tag} GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450"></img>}
      <input
        className="p-2 text-center  font-bold text-lg bg-zinc-100 w-9/12 rounded-xl"
        onChange={(event) => SetTag(event.target.value)}
        value={tag}
      />

      <button
        onClick={() => fetchdata(tag)}
        className="p-2 text-center mb-[20px] font-bold text-lg bg-zinc-100 w-9/12 rounded-xl"
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
