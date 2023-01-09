import { useState } from "react";
import WinModal from "../components/win-modal";

import BeachPuzzle from "../assets/puzzles/ww-beach.jpeg";
import Waldo from "../assets/characters/waldo.webp";
import Wenda from "../assets/characters/wenda.webp";
import Whitebeard from "../assets/characters/whitebeard.webp";
import Odlaw from "../assets/characters/odlaw.webp";
import Character from "../components/character";

export default function Puzzle() {
  const [foundCharacters, setFoundCharacters] = useState([]);

  const characters = [
    {
      id: 1,
      name: "Waldo",
      x_position: 62,
      y_position: 39,
      puzzle_id: 1,
    },
    {
      name: "Odlaw",
      x_position: 11,
      y_position: 37,
    },
    {
      name: "Wenda",
      x_position: 77,
      y_position: 41,
    },
    {
      name: "Whitebeard",
      x_position: 27,
      y_position: 37,
    },
  ];

  function onClick(e) {
    const xPosition = (
      ((e.pageX - e.target.offsetLeft) / e.target.offsetWidth) *
      100
    ).toFixed();
    const yPosition = (
      ((e.pageY - e.target.offsetTop) / e.target.offsetHeight) *
      100
    ).toFixed();

    console.log({ xPosition, yPosition });

    characters.forEach((character) => {
      if (
        Math.abs(xPosition - character.x_position) <= 2 &&
        Math.abs(yPosition - character.y_position) <= 2 &&
        !foundCharacters.includes(character.name)
      ) {
        console.log(`You found ${character.name}!`);
        setFoundCharacters([...foundCharacters, character.name]);
      }
    });
  }

  return (
    <div className="m-4" id="puzzle-container">
      <div id="characters" className="flex gap-6 justify-center">
        <Character src={Waldo} isFound={foundCharacters.includes("Waldo")} />
        <Character src={Wenda} isFound={foundCharacters.includes("Wenda")} />
        <Character
          src={Whitebeard}
          isFound={foundCharacters.includes("Whitebeard")}
        />
        <Character src={Odlaw} isFound={foundCharacters.includes("Odlaw")} />
      </div>
      <img
        src={BeachPuzzle}
        onClick={onClick}
        className="mt-2 border border-zinc-400 shadow-md rounded"
      />
      <WinModal hidden={foundCharacters.length < 4} />
    </div>
  );
}
