import React from "react";
import EpisodeItem from "./EpisodeItem";
import "./Episodes.css";

function Episodes({ episodes, onLoadCharacters }) {
  return (
    <section className="episode-section">
      <h3 className="heading-tertiary">Episodes</h3>
      <div className="episodes-container">
        {episodes.map((episode) => {
          return (
            <EpisodeItem
              onLoadCharacters={onLoadCharacters}
              key={episode.id}
              {...episode}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Episodes;
