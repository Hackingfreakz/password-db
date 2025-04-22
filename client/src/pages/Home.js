import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Card from '../components/Card';

function Home() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Correctly declare navigate

  const handleSeriesClick = (seriesName) => {
    console.log(seriesName);
    navigate(`/series/${seriesName}`);
  };

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/series'); // Ensure correct API URL
        const data = await response.json();
        setSeries(data); // Store fetched data in state
      } catch (error) {
        console.error('Error fetching series:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []); // Empty dependency array ensures this runs once

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          {series.map((item, index) => (
		<div key={item._id || item.id || index} className="col-md-4">
			<Card character={item} onClick={() => handleSeriesClick(item.name)} />
		</div>
			))}
        </div>
      </div>
    </div>
  );
}

export default Home;
