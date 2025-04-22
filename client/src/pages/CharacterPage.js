import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../components/Card"; 

const CharacterPage = () => {
  const { seriesName } = useParams();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/series/${seriesName}`);
        const data = await response.json();

        if (data)setCharacters(data);
        else console.error("Invalid data format:", data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
	  finally{
		  setLoading(false);
	  }
    };

    fetchCharacters();
  }, [seriesName]);

  const handleCharacterClick = (characterName) => {
    navigate(`/series/${seriesName}/${characterName}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Characters in {seriesName}</h1>
      <div className="container">
        <div className="row">
          {characters.map((item) => (
            <div key={item._id || item.id  } className="col-md-4">
              <Card character={item} onClick={() => handleCharacterClick(item.name)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
