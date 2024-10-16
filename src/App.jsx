import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FeaturedPaintings from "./components/FeaturedPaintings";
import OpenAuctions from "./components/OpenAuctions";
import FeaturedArtists from "./components/FeaturedArtists";
import CustomerReviews from "./components/CustomerReviews";
import ExploreOptions from "./components/ExploreOptions"; // Import ExploreOptions
import Footer from "./components/Footer";
import './index.css';

// Dummy components for detailed pages
const RareThingsPage = () => <div>Rare Things Collection</div>;
const PaintingsPage = () => <div>More Paintings Gallery</div>;
const DrawingsPage = () => <div>More Drawings</div>;
const SculpturePage = () => <div>More Sculptures</div>;
const ArtistsPage = () => <div>More Artists Details</div>;
const AuctionsPage = () => <div>More Auction Details</div>;
const ReviewsPage = () => <div>More Reviews</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <ExploreOptions /> {/* Add ExploreOptions at the top */}
            <FeaturedPaintings />
            <OpenAuctions />
            <FeaturedArtists />
            <CustomerReviews />
          </main>
        } />
        <Route path="/rare-things" element={<RareThingsPage />} /> {/* Route for Rare Things */}
        <Route path="/paintings" element={<PaintingsPage />} /> {/* Route for Paintings */}
        <Route path="/drawings" element={<DrawingsPage />} /> {/* Route for Drawings */}
        <Route path="/sculpture" element={<SculpturePage />} /> {/* Route for Sculpture */}
        <Route path="/artists" element={<ArtistsPage />} /> {/* Route for Artists */}
        <Route path="/auctions" element={<AuctionsPage />} /> {/* Route for Auctions */}
        <Route path="/reviews" element={<ReviewsPage />} /> {/* Route for Reviews */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
