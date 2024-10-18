import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ViewAuctionDetails.css'; // Import your CSS file for styles

// Import images from the assets directory
import mainImage from '../assets/images/wallowing-breeze.png'; // Replace with actual image path
import thumbnail1 from '../assets/images/thumbnail1.png'; // Replace with actual thumbnail paths
import thumbnail2 from '../assets/images/thumbnail2.png';
import thumbnail3 from '../assets/images/thumbnail3.png';

const ViewAuctionDetails = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="auction-container">
      <div className="image-section">
        <img
          src={mainImage} // Main auction image
          alt="Wallowing Breeze"
          className="main-image"
        />
        <div className="thumbnail-section">
          <img
            src={thumbnail1} // Thumbnails for the auction
            alt="thumbnail-1"
            className="thumbnail"
          />
          <img
            src={thumbnail2}
            alt="thumbnail-2"
            className="thumbnail"
          />
          <img
            src={thumbnail3}
            alt="thumbnail-3"
            className="thumbnail"
          />
        </div>
        <div className="view-share">
          <span>👁 View in a room</span>
          <span>🔗 Share</span>
        </div>
      </div>

      <div className="details-section">
        <button className="back-button" onClick={() => navigate(-1)}>← BACK</button>
        <h1 className="title">Wallowing Breeze</h1>
        <p className="artist-name">Hettie Richards</p>
        <p className="art-info">
          Oil on canvas, 2008 <br />
          Gallery wrap canvas <br />
          26 in × 23 in
        </p>
        <p className="description">
          Dynamic and elusive abstraction and texture. Plays between the lines
          of chaos and serenity. Perfect fit for modern and contemporary styled
          interiors.
        </p>

        <div className="bid-section">
          <p className="current-bid">
            <span className="label">Current Highest Bid:</span> $620
          </p>
          <p className="shipping-info">Ships from New York, NY, USA</p>
          <p className="bid-duration">Duration until Bid: 7 days</p>

          <button className="bid-button">BID</button>
        </div>

        <p className="taxes-info">
          Taxes and shipping fees will apply upon selection checkout
        </p>
      </div>
    </div>
  );
};

export default ViewAuctionDetails;
