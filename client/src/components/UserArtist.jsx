import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserArtist.css';  // Import CSS for styling

const UserArtist = () => {
  const { artistID } = useParams();  // Get artistID from URL params
  const [artist, setArtist] = useState(null);  // State to store artist details

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/artists/user/${artistID}`);
        setArtist(response.data[0]);  // Set the artist data
      } catch (error) {
        console.error('Error fetching artist details:', error);
      }
    };
    
    fetchArtistDetails();
  }, [artistID]);

  if (!artist) return <p>Loading...</p>;

  return (
    <div className="artist-profile">
      <h1>{artist.Name}'s Profile</h1>
      <img src={artist.ProfilePicture || 'default-profile.png'} alt="Artist" className="profile-picture" />
      <p><strong>Email:</strong> {artist.Email}</p>
      <p><strong>Bio:</strong> {artist.Bio}</p>
      <p><strong>Portfolio:</strong> <a href={artist.PortfolioURL.startsWith('http') ? artist.PortfolioURL : `http://${artist.PortfolioURL}`} target="_blank" rel="noreferrer">{artist.PortfolioURL}</a></p>
      <p><strong>Approval Status:</strong> {artist.ApprovalStatus}</p>
    </div>
  );
};

export default UserArtist;
