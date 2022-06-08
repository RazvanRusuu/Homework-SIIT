import React from "react";
import "./EpisodeItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faCalendarCheck,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";

function EpisodeItem({
  name,
  air_date: date,
  episode,
  characters,
  onLoadCharacters,
}) {
  return (
    <div className="episode-container">
      <h3 className="episode-name">
        <FontAwesomeIcon className="fa-solid" icon={faClapperboard} />
        {name}
      </h3>
      <span className="episode-date">
        <FontAwesomeIcon icon={faCalendarCheck} className="fa-solid" />
        {date}
      </span>
      <span className="episode-number">
        <FontAwesomeIcon icon={faKeyboard} className="fa-solid" />
        {episode}
      </span>
      <a className="btn btn__link" onClick={() => onLoadCharacters(characters)}>
        View {characters.length} characters
      </a>
    </div>
  );
}

export default EpisodeItem;
