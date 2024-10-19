import './ViewAuctionDetails.css'; 
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewAuctionDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // conflict hossilo karon backend e auctionID use korsilam ar tora shudu id
  const [auction, setAuction] = useState(null); // Initialize auction state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchAuctionDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/auctions/${id}`);
        setAuction(response.data[0]); // Assuming the response is an array
        setLoading(false); 
      } catch (err) {
        setError('Error fetching auction details');
        setLoading(false);
      }
    };

    fetchAuctionDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  const handleArtistClick = (id) => {
    alert('will show artist : button clicked!');
  };

  return (
    <div>
      <h1>Auction Details</h1>
      {auction && (
        <>
          <img src={auction.ImageURL} alt={auction.Title} width="300" />
          <h2>{auction.Title}</h2>
          <h3 onClick={() => handleArtistClick(auction.ArtistID)}>Artist: {auction.ArtistName}</h3>
          <p><strong>Description:</strong> {auction.Description}</p>
          <p><strong>Start Time:</strong> {new Date(auction.StartTime).toLocaleString()}</p>
          <p><strong>End Time:</strong> {new Date(auction.EndTime).toLocaleString()}</p>
          <p><strong>Starting Bid:</strong> ${auction.StartingBid}</p>
          <p><strong>Highest Bid:</strong> ${auction.HighestBid}</p>
          <p><strong>Status:</strong> {auction.AuctionStatus}</p>

          <button onClick={() => handleBid()}>BID</button>
        </>
      )}
    </div>
  );
};

const handleBid = () => {
  alert('Bid button clicked!');
};

export default ViewAuctionDetails;
