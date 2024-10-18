import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Auctions.css'; // Ensure you have corresponding styles for responsiveness

// Import images from the assets directory
import wallowingBreeze from '../assets/images/wallowing-breeze.png'; // Adjust the path based on your folder structure
import jResistance from '../assets/images/j-resistance.png';
import warmBasket from '../assets/images/warm-basket.png';
import theVonnegut from '../assets/images/the-vonnegut.png';

const auctionItems = [
  { id: 1, image: wallowingBreeze, title: 'Wallowing Breeze', artist: 'Hettie Richards', year: '2008', medium: 'Oil on canvas', size: '26 in x 23 in', price: '$620' },
  { id: 2, image: jResistance, title: 'J Resistance', artist: 'Ria Arante', year: '2018', medium: 'Gouache on paper', price: '$620' },
  { id: 3, image: warmBasket, title: 'Warm Basket', artist: 'Flora Powers', year: '2014', medium: 'Acrylic on wood', price: '$620' },
  { id: 4, image: theVonnegut, title: 'The Vonnegut', artist: 'Ria Arante', year: '2017', medium: 'Oil on canvas', price: '$620' },
];

const Auctions = () => {
  const navigate = useNavigate();

  const handleAuctionClick = (id) => {
    navigate(`/auction/${id}`); // Navigate to the auction details page
  };

  return (
    <div className="auctions-container">
      <h2>Current Auctions</h2>
      <div className="auctions-grid">
        {auctionItems.map(item => (
          <div key={item.id} className="auction-item">
            <div onClick={() => handleAuctionClick(item.id)} className="auction-image-container">
              <img src={item.image} alt={item.title} className="auction-image" />
            </div>
            <div className="auction-details">
              <h3 onClick={() => handleAuctionClick(item.id)}>{item.title}</h3>
              <p>{item.artist}</p>
              <p>{item.medium}, {item.year}</p>
              <p>{item.size}</p>
              <p>{item.price}</p>
            </div>
            <button className="bid-button" onClick={() => handleAuctionClick(item.id)}>
              BID
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auctions;
