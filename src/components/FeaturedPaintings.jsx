import React from 'react';
import { useNavigate } from 'react-router-dom'; // Using React Router for navigation

const paintings = [
  { title: "Innocence", artist: "Ria Arante", image: "/images/painting1.jpg" },
  { title: "Wallowing Breeze", artist: "Hettie Richards", image: "/images/painting2.jpg" },
  { title: "J Resistance", artist: "Ria Arante", image: "/images/painting3.jpg" },
];

const FeaturedPaintings = () => {
  const navigate = useNavigate(); // Navigation hook

  return (
    <section className="featured-paintings">
      <h2>Featured Paintings</h2>
      <div className="paintings-grid">
        {paintings.map((painting, index) => (
          <div key={index} className="painting-card">
            <img src={painting.image} alt={painting.title} />
            <h3>{painting.title}</h3>
            <p>by {painting.artist}</p>
          </div>
        ))}
      </div>
      <button className="view-more-btn" onClick={() => navigate('/paintings')}>
        View More Paintings
      </button>
    </section>
  );
};

export default FeaturedPaintings;
