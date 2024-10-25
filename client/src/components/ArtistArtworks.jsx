import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ArtistArtworks.css';  

const ArtistArtworks = () => {
  const { artistID } = useParams();  
  const [artworks, setArtworks] = useState([]);  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/artist/artworks`, {
          params: { artistID } 
        });
        setArtworks(response.data);  
      } catch (error) {
        console.error('Error fetching artworks:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchArtworks();
  }, [artistID]);

  if (loading) return <p>Loading artworks...</p>;
  if (artworks.length === 0) return <p>No artworks found.</p>;

  return (
    <div className="artist-artworks">
      <h2>My Artworks</h2>
      <div className="artwork-list">
        {artworks.map((artwork) => (
          <div key={artwork.ArtworkID} className="artwork-card">
            <h3>{artwork.Title}</h3>
            <p><strong>Description:</strong> {artwork.Description}</p>
            <p><strong>Starting Bid:</strong> ${artwork.StartingBid}</p>
            <p><strong>Highest Bid:</strong> ${artwork.HighestBid || 'No bids yet'}</p>
            <p><strong>Start Time:</strong> {new Date(artwork.StartTime).toLocaleString()}</p>
            <p><strong>End Time:</strong> {new Date(artwork.EndTime).toLocaleString()}</p>
            <p><strong>Auction Status:</strong> {artwork.AuctionStatus}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistArtworks;
