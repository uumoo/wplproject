import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  "../Index.css"; 


import auction1 from '../assets/images/auction1.jpg';
import auction2 from '../assets/images/auction2.jpg';

const auctionImages = [
  { image: auction1, title: "Bikes Against Wall" },
  { image: auction2, title: "Modern Art Piece" },
];

const OpenAuctions = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };

  return (
    <section className="open-auctions">
      <h2>Auctions</h2>
      <Slider {...settings}>
        {auctionImages.map((auction, index) => (
          <div key={index} className="auction-slide">
            <img src={auction.image} alt={auction.title} className="auction-image" />
            <h3>{auction.title}</h3>
          </div>
        ))}
      </Slider>
      <button className="view-more-btn" onClick={() => navigate('/auctions')}>
        View More Auctions
      </button>
    </section>
  );
};

export default OpenAuctions;