import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Random() {
  const { gif, loading, fetchdata } = useGif();
  //

  return (
    <div className="bg-zinc-500 w-1/2   items-center flex flex-col gap-10 mt-5 p-5 rounded-xl border border-black ">
      <h1 className="font-bold text-xl underline mt-[15px]">A RANDOM GIF</h1>
      {loading ? <Spinner /> : <img src={gif} width="450"></img>}

      <button
        onClick={() => fetchdata()}
        className="p-2 text-center mb-[20px] font-bold text-lg bg-zinc-100 w-9/12 rounded-xl"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
