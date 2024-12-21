import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
function App() {
  return (
    <div className="flex flex-col items-center bg-zinc-900 h-full w-full gap-5  ">
      <h1 className="bg-white mt-5 py-3 w-10/12 text-center font-bold text-2xl rounded-xl">
        RANDOM GIFS
      </h1>
      <Random />
      <Tag />
    </div>
  );
}

export default App;
