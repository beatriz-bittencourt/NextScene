import React from "react";

interface IGenres {
    index: number;
    name: string;
    length: number | undefined;
}

const Genres: React.FC<IGenres> = ({ index, name, length }) => {
    return (
      <div className="flex gap-4 text-textColor">
        <div>{name}</div>
        <div className="text-textColor">{index !== (length ?? 0) - 1 ? "/  " : ""}</div>
      </div>
    );
  };
  
  

export default Genres;