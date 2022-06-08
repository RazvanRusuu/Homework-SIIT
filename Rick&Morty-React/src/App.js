import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { episodesUrl } from "./utilis";

function App() {
  const [error, setError] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);

  const getEpisodeData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Something went wrong");
      const { results } = await response.json();
      setEpisodes(results);
    } catch (err) {
      setError(true);
    }
  };

  const getCharacterData = async (urls) => {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((res) => res.json()));
    setCharacters(data);
  };

  useEffect(() => {
    getEpisodeData(episodesUrl);
  }, [episodesUrl]);

  return (
    <>
      <Header className="header"></Header>
      <Main
        onLoadCharacters={getCharacterData}
        episodes={episodes}
        characters={characters}
      />
    </>
  );
}

export default App;
