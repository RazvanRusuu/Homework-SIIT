import React from "react";
import Episodes from "../Episodes/Episodes";
import Characters from "../Characters/Characters";
import "./Main.css";

function Main({ episodes, characters, onLoadCharacters }) {
  return (
    <main>
      <section className="section">
        <div className="section-container grid-2--cols">
          <h2 className="heading-secondary">Welcome to Rick and Morty</h2>
          <Episodes onLoadCharacters={onLoadCharacters} episodes={episodes} />
          <Characters characters={characters} />
        </div>
      </section>
    </main>
  );
}

export default Main;
