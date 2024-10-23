import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './AuctionBidding.css';

const AuctionBidding = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [highestBid, setHighestBid] = useState(0); 
  const [newBid, setNewBid] = useState(0); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchAuctionDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/auctions/${id}`);
        const auctionData = response.data[0]; // Extract auction data
        setAuction(auctionData); // Store the auction data
        setHighestBid(auctionData.HighestBid || 0); // Set highest bid from data
        setNewBid(auctionData.HighestBid ? auctionData.HighestBid + 1 : 1); // Initialize new bid above highest bid
        setLoading(false); // Stop loading
      } catch (err) {
        setError('Error fetching auction details'); // Set error if API call fails
        setLoading(false);
      }
    };

    fetchAuctionDetails();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (newBid > highestBid) {
      // Check if new bid is higher than current highest bid
      setHighestBid(newBid); // Update the highest bid state
      alert(`Your bid of $${newBid} was successfully submitted!`);
    } else {
      alert('Your bid must be higher than the current highest bid.');
    }
  };

  if (loading) return <div>Loading...</div>; // Show loading message
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div className="auction-container">
      <h2>Auction Bidding</h2>
      <form onSubmit={handleSubmit}>
        <div className="bid-section">
          <label>Current Highest Bid: </label>
          <input type="number" value={highestBid} disabled className="bid-input" /> {/* Show highest bid */}
        </div>
        <div className="bid-section">
          <label>Your Bid: </label>
          <input
            type="number"
            min={highestBid + 1} // Minimum bid must be higher than the current highest bid
            value={newBid}
            onChange={(e) => setNewBid(Number(e.target.value))} // Update new bid based on user input
            className="bid-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Bid
        </button>
      </form>
    </div>
  );
};

export default AuctionBidding;
