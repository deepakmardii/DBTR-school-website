import React from "react";
import ImageCard from "./ImageCard";

const Images = () => {
  return (
    <div>
      <div>
        <ImageCard />
      </div>
      <button className="inline-block rounded border-2 border-school-red px-12 py-3 text-school-red focus:outline-none focus:ring active:bg-school-red font-semibold">
        View more
      </button>
    </div>
  );
};

export default Images;
