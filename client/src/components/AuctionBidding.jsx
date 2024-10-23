import React, { useState } from 'react';
import './AuctionBidding.css'; // Import the CSS file

const AuctionBidding = () => {
  const [highestBid, setHighestBid] = useState(100); // Example starting bid
  const [newBid, setNewBid] = useState(highestBid);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBid > highestBid) {
      setHighestBid(newBid);
      alert('Your bid of $${newBid} was successfully submitted!');
    } else {
      alert('Your bid must be higher than the current highest bid.');
    }
  };

  return (
    <div className="auction-container">
      <h2>Auction Bidding</h2>
      <form onSubmit={handleSubmit}>
        <div className="bid-section">
          <label>Current Highest Bid: </label>
          <input type="number" value={highestBid} disabled className="bid-input" />
        </div>
        <div className="bid-section">
          <label>Your Bid: </label>
          <input
            type="number"
            min={highestBid + 1}
            value={newBid}
            onChange={(e) => setNewBid(Number(e.target.value))}
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