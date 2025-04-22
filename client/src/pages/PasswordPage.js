import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PasswordPage = () => {
  const { seriesName, characterName } = useParams(); 
  const [passwords, setPasswords] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
  const fetchPasswords = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/series/${seriesName}/${characterName}`);
      const data = await response.json(); 
      console.log("Fetched passwords:", data); 
      if (data) setPasswords(data);
      
    } catch (err) {
      console.error("Error fetching passwords:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchPasswords();
}, [seriesName, characterName]);

  return (
  <div>
    <h1>Passwords for {characterName}</h1>
    {loading ? (
      <p>Loading passwords...</p>
    ) : passwords && passwords.length > 0 ? (
      <div>
        {passwords.map((password) => (
          <p key={password._id}>
            <strong>Password {password.sno}:</strong> {password.value}
          </p>
        ))}
      </div>
    ) : (
      <p>No passwords found.</p>
    )}
  </div>
);

};

export default PasswordPage;
