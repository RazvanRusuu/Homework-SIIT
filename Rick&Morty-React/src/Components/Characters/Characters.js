import React from "react";
import CharacterItem from "./CharacterItem";
import "./Characters.css";

function Characters({ characters }) {
  return (
    <aside>
      <h3 className="heading-tertiary">Characters</h3>
      <div className="characters-container">
        {characters.map((ch) => {
          return <CharacterItem key={ch.id} {...ch} />;
        })}
      </div>
    </aside>
  );
}

export default Characters;
